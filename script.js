
  // सभी accordion हेडर एलिमेंट्स सेलेक्ट करो
document.querySelectorAll('.class-header').forEach(header => {
  
    // हर हेडर पर क्लिक इवेंट लगाओ
    header.addEventListener('click', () => {
      
      // क्लिक किए गए हेडर पर 'active' क्लास टॉगल करो (add/remove)
      header.classList.toggle('active');
      
      // हेडर के बाद वाला कंटेंट डिव सेलेक्ट करो
      const content = header.nextElementSibling;
      
      // अगर कंटेंट पहले से खुला है तो उसे बंद करो
      if (content.classList.contains('open')) {
        content.classList.remove('open');
        content.style.maxHeight = null; // max-height रीसेट
      } else {
        // अगर कंटेंट बंद है तो उसे खोलो
        content.classList.add('open');
        // max-height सेट करो ताकि smooth खुलने का एनीमेशन हो
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-frame');
    const closeBtn = document.querySelector('.pdf-close');
    const downloadBtn = document.getElementById('download-btn');
  
    document.querySelectorAll('.open-pdf').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault(); // लिंक के डिफॉल्ट behavior को रोको
        
        const pdfPath = link.getAttribute('data-pdf');
        if (pdfPath) {
          iframe.src = pdfPath;
          downloadBtn.href = pdfPath;
          modal.style.display = 'flex'; // modal दिखाओ (flex क्योंकि हमने CSS में flexbox का इस्तेमाल किया)
        }
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      iframe.src = ''; // iframe साफ करो ताकि PDF बंद हो जाए
    });
  
    // अगर modal के बाहर क्लिक हो तो भी बंद करो
    window.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        iframe.src = '';
      }
    });
  });
  