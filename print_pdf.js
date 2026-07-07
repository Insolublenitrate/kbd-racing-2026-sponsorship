const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Convert to absolute file URI
    const filePath = `file:///${path.resolve('KBD_Racing_2026_Sponsorship_Deck.html').replace(/\\/g, '/')}`;
    console.log('Loading file:', filePath);
    
    await page.goto(filePath, { waitUntil: 'networkidle0' });

    // Inject print styles so that the layout works for PDF
    await page.addStyleTag({
      content: `
        @media print {
          @page { size: landscape; margin: 0; }
          body, html { overflow: visible !important; height: auto !important; width: 100% !important; margin: 0 !important; padding: 0 !important;}
          .container { height: auto !important; overflow: visible !important; scroll-snap-type: none !important; }
          .slide { 
              height: 100vh !important; 
              width: 100vw !important;
              page-break-after: always !important; 
              page-break-inside: avoid !important;
              scroll-snap-align: none !important; 
              margin: 0 !important;
          }
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .scroll-indicator { display: none !important; }
          .pagination { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `
    });

    console.log('Generating PDF...');
    await page.pdf({
      path: 'KBD_Racing_2026_Sponsorship_Deck.pdf',
      format: 'A4',
      landscape: true,
      printBackground: true
    });

    console.log('PDF Generated Successfully!');
    await browser.close();
  } catch (e) {
    console.error('Error generating PDF:', e);
    process.exit(1);
  }
})();
