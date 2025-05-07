const pdfData = [
    {
      title: "Airstream",
      preview: "projects/previews/Airstream.jpg",
      report: "projects/pdfs/Airstream.pdf",
      description: ""
    },
    {
      title: "A Recycling Paradox",
      preview: "projects/previews/Metaal_THESIS.jpg",
      presentation: "projects/pdfs/Metaal_THESIS.pdf",
      description: "Thesis Project by Kirti R."
    },
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
      title: "EcoXchange",
      preview: "projects/previews/EcoXchange.jpg",
      presentation: "projects/pdfs/EcoXchange.pdf",
      gannt: "projects/pdfs/EcoXchange_Gannt_Chart.pdf",
      projection: "projects/pdfs/EcoXchange_Financial_Projections.pdf",
      description: "PW2"
    },
    {
      title: "Enron Scandal",
      preview: "projects/previews/Enron_scandal.jpg",
      presentation: "projects/pdfs/Enron_scandal.pdf",
      description: ""
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
      title: "Geopolitics: Sanitation & Economic Growth",
      preview: "projects/previews/Geopolitics_Sanitation_Economic_Growth.jpg",
      report: "projects/pdfs/Geopolitics_Sanitation_Economic_Growth.pdf",
      description: "Geopolitics Final Assignment 2: Sanitation & Economic Growth"
    },
    {
      title: "Goovi",
      preview: "projects/previews/Goovi.jpg",
      presentation: "projects/pdfs/Goovi.pdf",
      proposal: "projects/pdfs/Goovi_proposal.pdf",
      description: "EMILIA REICHARDT, ZLATA TIMOFEJEVA, JASMINA BADIC and KIRTI"
    },
    {
      title: "Heineken",
      preview: "projects/previews/Heineken.jpg",
      report: "projects/pdfs/Heineken.pdf",
      description: ""
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
      title: "Intercultural Communication: Analysing Indo-Emirati Culture in the Multicultural Perspective",
      preview: "projects/previews/Intercultural_Communication.jpg",
      report: "projects/pdfs/Intercultural_Communication.pdf",
      description: "Kirti R."
    },
    {
      title: "Macroeconomics Report: Innovation Capacity & Economic Growth",
      preview: "projects/previews/Macro_Innovation_Capacity_and_Economic_Growth.jpg",
      report: "projects/pdfs/Macro_Innovation_Capacity_and_Economic_Growth.pdf",
      description: "Macroeconomics Report: Class Assignment by Lauren Müller, Kirti R and Renee Lavalle Lopez"
    },
    {
      title: "Keep It Blue",
      preview: "projects/previews/Keep_it_blue.jpg",
      presentation: "projects/pdfs/Keep_it_blue.pdf",
      presentation2: "projects/pdfs/Keep_it_blue_2.pdf",
      presentation3: "projects/pdfs/Keep_it_blue_3.pdf",
      proposal: "projects/pdfs/Keep_it_blue_proposal.pdf",
      report: "projects/pdfs/Keep_it_blue_report.pdf",
      description: "Kirti R. and Renee L."
    },
    {
      title: "Komodra: A Case Study of a Rising Business",
      preview: "projects/previews/Komodra.jpg",
      presentation: "projects/pdfs/Komodra.pdf",
      description: "Business Strategy by Renee L. and Kirti R."
    },
    {
      title: "Labour Markets in the Green Economy",
      preview: "projects/previews/Labour_Markets_in_the_Green_Economy.jpg",
      report: "projects/pdfs/Labour_Markets_in_the_Green_Economy.pdf",
      description: "Risks and Opportunities for the Labour Force by Emilia Reichardt, Nadia Flori, Kirti Rankawat and Zlata Timofejeva"
    },
    {
      title: "Linkedin Canvas",
      preview: "projects/previews/Linkedin_Canvas.jpg",
      presentation: "projects/pdfs/Linkedin_Canvas.pdf",
      description: "Kirti R.'s Linkedin Canvas"
    },
    {
      title: "MUDEC: Sustainability by Default",
      preview: "projects/previews/MUDEC_SUSTAINABILITY_BY_DEFAULT.jpg",
      presentation: "projects/pdfs/MUDEC_SUSTAINABILITY_BY_DEFAULT.pdf",
      description: "The Rite of Passage by Luca Barricelli, Renee Lavalle Lopez, Kirti R., Gianinna Spinzi In cooperation with: LePalette Collective"
    },
    {
      title: "Linkedin Canvas",
      preview: "projects/previews/Linkedin_Canvas.jpg",
      presentation: "projects/pdfs/Linkedin_Canvas.pdf",
      description: "Kirti R.'s Linkedin Canvas"
    },
    {
      title: "Multi-Stakeholder Management: SHELL and IUCN",
      preview: "projects/previews/Multi-Stakeholder_Management.jpg",
      presentation: "projects/pdfs/Multi-Stakeholder_Management.pdf",
      description: ""
    },
    {
      title: "Organizational Leadership: Self Evaluation Report",
      preview: "projects/previews/Organizational_leadership.jpg",
      report: "projects/pdfs/Organizational_leadership.pdf",
      description: "Kirti R."
    },
    {
      title: "Overcoming Financial Challenges in Green Procurement: A Study in the Context of Developing Countries",
      preview: "projects/previews/Overcoming_Financial_Challenges_in_Green_Procurement.jpg",
      report: "projects/pdfs/Overcoming_Financial_Challenges_in_Green_Procurement.pdf",
      description: "Kirti R."
    },
    {
      title: "Pela: Case Study Analysis",
      preview: "projects/previews/Pela.jpg",
      presentation: "projects/pdfs/Pela.pdf",
      description: "Pela Case Study Analysis Spencer & Kirti R."
    },
    {
      title: "Pepsi Design Challenge",
      preview: "projects/previews/Pepsi_Design_Challenge.jpg",
      presentation: "projects/pdfs/Pepsi_Design_Challenge.pdf",
      description: "Making Memories Sustainably: Design Challenge By KR Consultancies"
    },
    {
      title: "RIBEIRÃO PRETO SCIENCE PARK",
      preview: "projects/previews/RIBEIRAO_PRETO_SCIENCE_PARK.jpg",
      presentation: "projects/pdfs/RIBEIRAO_PRETO_SCIENCE_PARK.pdf",
      report: "projects/pdfs/RIBEIRAO_PRETO_SCIENCE_PARK_report.pdf",
      description: "By Kirt R."
    },
    {
      title: "Scuba Diving 101",
      preview: "projects/previews/Scuba_diving_101.jpg",
      presentation: "projects/pdfs/Scuba_diving_101.pdf",
      description: "Personal Brand by Kirti R."
    },
    {
      title: "Seaspiracy: Stop Eating Fish",
      preview: "projects/previews/Seaspiracy_stop_eating_fish.jpg",
      presentation: "projects/pdfs/Seaspiracy_stop_eating_fish.pdf",
      description: ""
    },
    {
      title: "Self Reflection Report: BBA in Sustainability Management",
      preview: "projects/previews/Self_reflection_Report.jpg",
      report: "projects/pdfs/Self_reflection_Report.pdf",
      description: "By Kirti R., Professor: Joe Di Donna, Ph.D"
    },
    {
      title: "Corporate Analysis of Sustainability Risks and Opportunities of IKEA and SHELL",
      preview: "projects/previews/Shell_IKEA.jpg",
      presentation: "projects/pdfs/Shell_IKEA.pdf",
      report: "projects/pdfs/Shell_IKEA_report.pdf",
      description: "Lada Kuzina and Kirti R."
    },
    {
      title: "Spiritual Leadership: Meaning in the Sustainable Workplace",
      preview: "projects/previews/Spiritual_Leadership.jpg",
      presentation: "projects/pdfs/Spiritual_Leadership.pdf",
      report: "projects/pdfs/Spiritual_Leadership_report.pdf",
      description: "by Kirti R."
    },
    {
      title: "Sustainability: CAN YOU SPOT WHAT IS BEING CULTIVATED?",
      preview: "projects/previews/Sustainability_Presentation.jpg",
      presentation: "projects/pdfs/Sustainability_Presentation.pdf",
      description: ""
    },
    {
      title: "Sony IT",
      preview: "projects/previews/Sony_IT.jpg",
      presentation: "projects/pdfs/Sony_IT.pdf",
      description: "An IT workflow strategy and system audit for Sony India teams."
    },
    {
      title: "Sustainability Report Analysis of Orange Fiber, Solar Ventures Capital, and Bav Tailor",
      preview: "projects/previews/Sustainability_Report_Analysis.jpg",
      report: "projects/pdfs/Sustainability_Report_Analysis.pdf",
      description: "Kirt R."
    },
    {
      title: "Press Release",
      preview: "projects/previews/Press_Release.jpg",
      presentation: "projects/pdfs/Press_Release.pdf",
      description: "Kirt R."
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
  
    const pdfUrl = pdf.presentation || pdf.proposal || pdf.report;
    currentPDFUrl = pdf.presentation || pdf.proposal || null;


    const viewerWrapper = document.createElement("div");
    viewerWrapper.className = "pdf-viewer-wrapper";
    viewerWrapper.innerHTML = `
      <div class="pdf-viewer-content">
        <div class="pdf-description">${pdf.description || "No description available."}</div>
        <div class="pdf-buttons">
          ${pdf.presentation ? `<button onclick="setCurrentPDF(${index}, '${pdf.presentation}')">View Presentation</button>` : ""}
          ${pdf.presentation2 ? `<button onclick="setCurrentPDF(${index}, '${pdf.presentation2}')">View Presentation 2</button>` : ""}
          ${pdf.presentation3 ? `<button onclick="setCurrentPDF(${index}, '${pdf.presentation3}')">View Presentation 3</button>` : ""}
          ${pdf.proposal ? `<button onclick="setCurrentPDF(${index}, '${pdf.proposal}')">View Proposal</button>` : ""}
          ${pdf.report ? `<button onclick="setCurrentPDF(${index}, '${pdf.report}')">View Report</button>` : ""}
          ${pdf.gannt ? `<button onclick="setCurrentPDF(${index}, '${pdf.gannt}')">View Gannt Chart</button>` : ""}
          ${pdf.projection ? `<button onclick="setCurrentPDF(${index}, '${pdf.projection}')">View Financial Projections</button>` : ""}
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
  