
document.querySelectorAll('.class-header').forEach(header => {
  
  header.addEventListener('click', () => {
    
    header.classList.toggle('active');
    
    const content = header.nextElementSibling;
    
    if (content.classList.contains('open')) {
      content.classList.remove('open');
      content.style.maxHeight = null; 
    } else {
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const assessmentModal = document.getElementById('assessment-modal');
  const openBtn = document.getElementById('open-assessment');
  const closeBtn = document.getElementById('assessment-close');

  openBtn.addEventListener('click', e => {
    e.preventDefault();
    assessmentModal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    assessmentModal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === assessmentModal) {
      assessmentModal.style.display = 'none';
    }
  });
});

  
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-frame');
  const closeBtn = document.querySelector('.pdf-close');
  const downloadBtn = document.getElementById('download-btn');

  console.log("PDF modal script loaded");
  document.querySelectorAll('.open-pdf').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      const pdfPath = link.getAttribute('data-pdf');
      if (pdfPath) {
        iframe.src = pdfPath;
        downloadBtn.href = pdfPath;
        modal.style.display = 'flex';
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = ''; 
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      iframe.src = '';
    }
  });
});

let activeField = null;
function toggleDetails(field) {
    if (activeField) {
        document.getElementById(activeField).style.display = "none";
    }
    if (activeField !== field) {
        document.getElementById(field).style.display = "block";
        activeField = field;
    } else {
        activeField = null;
    }
}