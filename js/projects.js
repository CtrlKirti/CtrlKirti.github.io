const pdfData = [
    {
      title: "BioNTech",
      preview: "projects/previews/BioNTech.jpg",
      presentation: "projects/pdfs/BioNTech.pdf",
      description: ""
    },
    {
      title: "Britney Spears",
      preview: "projects/previews/Britney_Spears.jpg",
      presentation: "projects/pdfs/Britney_Spears.pdf",
      description: "Grace and Kirti"
    },
    {
      title: "Carbon Capture Utilization and Storage Technologies",
      preview: "projects/previews/Carbon_Capture_Utilization_and_Storage_Technologies.jpg",
      presentation: "projects/pdfs/Carbon_Capture_Utilization_and_Storage_Technologies.pdf",
      description: "Kirti R, Luca Wunderlich, Nadia Flori, Giannina Spinzi and Lauren Müller"
    },
    {
      title: "Carbon Footprint of Thinking",
      preview: "projects/previews/Carbon_Footprint_of_Thinking.jpg",
      presentation: "projects/pdfs/Carbon_Footprint_of_Thinking.pdf",
      proposal: "projects/pdfs/Carbon_Footprint_of_Thinking_proposal.pdf",
      description: "Capriolo by Kirti"
    },
    {
      title: "Entrepreneurial Personality",
      preview: "projects/previews/Entrepreneurial_Personality.jpg",
      presentation: "projects/pdfs/Entrepreneurial_Personality.pdf",
      description: "Kirti R. and Gandharv G."
    },
    {
      title: "Finance and Procurement",
      preview: "projects/previews/Finance_and_procurement.jpg",
      presentation: "projects/pdfs/Finance_and_procurement.pdf",
      description: ""
    },
    {
      title: "Goovi",
      preview: "projects/previews/Goovi.jpg",
      presentation: "projects/pdfs/Goovi.pdf",
      proposal: "projects/pdfs/Goovi_proposal.pdf",
      description: "EMILIA REICHARDT, ZLATA TIMOFEJEVA, JASMINA BADIC and KIRTI"
    },
    {
      title: "Hitachi",
      preview: "projects/previews/Hitachi.jpg",
      presentation: "projects/pdfs/Hitachi.pdf",
      proposal: "projects/pdfs/Hitachi_proposal.pdf",
      description: "Kirti R, Luca W and Sara B"
    },
    {
      title: "House of Chanel 1954",
      preview: "projects/previews/House_of_Chanel.jpg",
      proposal: "projects/pdfs/House_of_Chanel.pdf",
      description: "Gender Equality Proposal by Kirti R - Workplace Professional Development Proposal"
    },
    {
      title: "INDIA: ZERO DEFECT ZERO EFFECT",
      preview: "projects/previews/iNDIA_iNFRA.jpg",
      presentation: "projects/pdfs/iNDIA_iNFRA.pdf",
      description: "Innovation, Industry & Infra By Gandharv G. and Kirti R."
    },
    {
        title: "Sony IT",
        preview: "projects/previews/Sony_IT.png",
        presentation: "projects/pdfs/Sony_IT.pdf",
        description: "An IT workflow strategy and system audit for Sony India teams."
    },
  ];
  
  let currentViewer = null;
  let currentPDFUrl = null;
  let pdfInstances = {};
  
  function loadPdfCards() {
    const container = document.getElementById("pdf-grid");
    if (!container) return;
  
    pdfData.forEach((pdf, index) => {
      const card = document.createElement("div");
      card.className = "pdf-card";
      card.innerHTML = `
        <div class="preview-wrapper">
        <img src="${pdf.preview}" alt="${pdf.title}" />
        </div>
        <div class="pdf-title">${pdf.title}</div>
      `;
      card.addEventListener("click", () => handleViewerToggle(index, pdf, card));
      container.appendChild(card);
    });
  }
  
  function handleViewerToggle(index, pdf, clickedCard) {
    closeCurrentViewer();
  
    const grid = document.getElementById("pdf-grid");
  
    const pdfUrl = pdf.presentation || pdf.proposal;
    currentPDFUrl = pdf.presentation || pdf.proposal || null;


    const viewerWrapper = document.createElement("div");
    viewerWrapper.className = "pdf-viewer-wrapper";
    viewerWrapper.innerHTML = `
      <div class="pdf-viewer-content">
        <div class="pdf-description">${pdf.description || "No description available."}</div>
        <div class="pdf-buttons">
          ${pdf.presentation ? `<button onclick="setCurrentPDF(${index}, '${pdf.presentation}')">View Presentation</button>` : ""}
          ${pdf.proposal ? `<button onclick="setCurrentPDF(${index}, '${pdf.proposal}')">View Proposal</button>` : ""}
          <button onclick="downloadCurrentPDF(${index})">Download</button>
          <button onclick="closeCurrentViewer()">Close</button>
        </div>
        <div class="pdf-js-viewer">
          <canvas id="pdf-canvas-${index}"></canvas>
          <div class="pdf-nav">
            <button onclick="navigatePage(${index}, -1)">Prev</button>
            <span id="page-info-${index}">Page 1</span>
            <button onclick="navigatePage(${index}, 1)">Next</button>
          </div>
        </div>
      </div>
    `;
  
    insertViewerAfterRow(grid, clickedCard, viewerWrapper);
    currentViewer = viewerWrapper;
  
    // Immediately load the PDF into the viewer
    if (pdfUrl) {
      loadPDFJS(`pdf-canvas-${index}`, pdfUrl, index);
    }
  }
  
  function updateIframeSrc(iframeId, url) {
    const iframe = document.getElementById(iframeId);
    if (iframe) {
      iframe.src = url;
      currentPDFUrl = url;
    }
  }

  function setCurrentPDF(index, url) {
    currentPDFUrl = url;
    loadPDFJS(`pdf-canvas-${index}`, url, index);
  }
  
  function downloadCurrentPDF() {
    if (!currentPDFUrl) return;
    const link = document.createElement('a');
    link.href = currentPDFUrl;
    link.target = '_blank'; // Optional: open in new tab if download fails
    link.rel = 'noopener';
    link.click();
  }
  
  
  function loadPDFJS(canvasId, url, index) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
  
    pdfjsLib.getDocument(url).promise.then(pdf => {
      pdfInstances[index] = {
        pdfDoc: pdf,
        pageNum: 1,
        canvas: canvas,
        ctx: ctx,
      };
      renderPage(index);
    });
  }
  
  function renderPage(index) {
    const instance = pdfInstances[index];
    const { pdfDoc, pageNum, canvas, ctx } = instance;
  
    pdfDoc.getPage(pageNum).then(page => {
      const viewport = page.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
  
      page.render({ canvasContext: ctx, viewport });
  
      document.getElementById(`page-info-${index}`).textContent = `Page ${pageNum} of ${pdfDoc.numPages}`;
    });
  }
  
  function navigatePage(index, direction) {
    const instance = pdfInstances[index];
    if (!instance) return;
  
    const { pdfDoc } = instance;
    const newPage = instance.pageNum + direction;
  
    if (newPage >= 1 && newPage <= pdfDoc.numPages) {
      instance.pageNum = newPage;
      renderPage(index);
    }
  }
  
  function closeCurrentViewer() {
    if (currentViewer) {
      currentViewer.remove();
      currentViewer = null;
      currentPDFInstance = null;
    }
  }
  
  // Utility to insert viewer after the row the clicked card belongs to
  function insertViewerAfterRow(grid, clickedCard, viewerWrapper) {
    const cards = Array.from(grid.children);
    const clickedIndex = cards.indexOf(clickedCard);
    const clickedTop = clickedCard.getBoundingClientRect().top;
  
    // Find where the current row ends
    let insertAfterIndex = clickedIndex;
    for (let i = clickedIndex + 1; i < cards.length; i++) {
      const cardTop = cards[i].getBoundingClientRect().top;
      if (Math.abs(cardTop - clickedTop) > 5) {
        break;
      }
      insertAfterIndex = i;
    }
  
    const referenceCard = cards[insertAfterIndex];
    referenceCard.after(viewerWrapper);
  }
  
  document.addEventListener("DOMContentLoaded", loadPdfCards);
  