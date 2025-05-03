const pdfData = [
    {
      title: "Sony IT",
      preview: "projects/previews/Sony_IT.png",
      presentation: "projects/pdfs/Sony_IT.pdf",
      proposal: "projects/pdfs/Sony_IT_proposal.pdf",
      description: "An IT workflow strategy and system audit for Sony India teams."
    },
    {
      title: "Sony IT",
      preview: "projects/previews/Sony_IT.png",
      presentation: "projects/pdfs/Sony_IT.pdf",
      proposal: "projects/pdfs/Sony_IT_proposal.pdf",
      description: "An IT workflow strategy and system audit for Sony India teams."
    },
    {
      title: "Sony IT",
      preview: "projects/previews/Sony_IT.png",
      presentation: "projects/pdfs/Sony_IT.pdf",
      proposal: "projects/pdfs/Sony_IT_proposal.pdf",
      description: "An IT workflow strategy and system audit for Sony India teams."
    },
    {
      title: "Sony IT",
      preview: "projects/previews/Sony_IT.png",
      presentation: "projects/pdfs/Sony_IT.pdf",
      proposal: "projects/pdfs/Sony_IT_proposal.pdf",
      description: "An IT workflow strategy and system audit for Sony India teams."
    },
    {
      title: "Sony IT",
      preview: "projects/previews/Sony_IT.png",
      presentation: "projects/pdfs/Sony_IT.pdf",
      proposal: "projects/pdfs/Sony_IT_proposal.pdf",
      description: "An IT workflow strategy and system audit for Sony India teams."
    },
    {
      title: "Sony IT",
      preview: "projects/previews/Sony_IT.png",
      presentation: "projects/pdfs/Sony_IT.pdf",
      proposal: "projects/pdfs/Sony_IT_proposal.pdf",
      description: "An IT workflow strategy and system audit for Sony India teams."
    }
  ];
  
  let currentViewer = null;
  
  function loadPdfCards() {
    const container = document.getElementById("pdf-grid");
    if (!container) return;
  
    pdfData.forEach((pdf, index) => {
      const card = document.createElement("div");
      card.className = "pdf-card";
      card.innerHTML = `
        <img src="${pdf.preview}" alt="${pdf.title}" />
        <div class="pdf-title">${pdf.title}</div>
      `;
      card.addEventListener("click", () => handleViewerToggle(index, pdf, card));
      container.appendChild(card);
    });
  }
  
  function handleViewerToggle(index, pdf, clickedCard) {
    closeCurrentViewer();
  
    const grid = document.getElementById("pdf-grid");
  
    const viewerWrapper = document.createElement("div");
    viewerWrapper.className = "pdf-viewer-wrapper";
    viewerWrapper.innerHTML = `
      <div class="pdf-viewer-content">
        <div class="pdf-description">${pdf.description || "No description available."}</div>
        <div class="pdf-buttons">
          ${pdf.presentation ? `<button onclick="updateIframeSrc('iframe-${index}', '${pdf.presentation}')">View Presentation</button>` : ""}
          ${pdf.proposal ? `<button onclick="updateIframeSrc('iframe-${index}', '${pdf.proposal}')">View Proposal</button>` : ""}
          <button onclick="closeCurrentViewer()">Close</button>
        </div>
        <iframe id="iframe-${index}" src="${pdf.presentation}" height="600px"></iframe>
      </div>
    `;
  
    // Insert the viewer after the row where the clicked card appears
    insertViewerAfterRow(grid, clickedCard, viewerWrapper);
  
    currentViewer = viewerWrapper;
  }
  
  function closeCurrentViewer() {
    if (currentViewer && currentViewer.parentNode) {
      currentViewer.remove();
      currentViewer = null;
    }
  }
  
  function updateIframeSrc(iframeId, newSrc) {
    const iframe = document.getElementById(iframeId);
    if (iframe) {
      iframe.src = newSrc;
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
  