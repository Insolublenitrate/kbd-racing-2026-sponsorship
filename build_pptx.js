const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();

// Set presentation layout
pptx.layout = 'LAYOUT_16x9';

// Define Master Slide for Dark Mode
pptx.defineSlideMaster({
  title: 'MASTER_SLIDE',
  background: { color: '121212' },
  objects: [
    { rect: { x: 0, y: 0, w: '100%', h: '100%', fill: '121212' } }
  ]
});

// SLIDE 1: Cover
let slide1 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide1.addImage({ path: 'assets/FB_IMG_1780578610600.jpg', x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' }});
slide1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: '100%', fill: { type: 'solid', color: '121212', alpha: 30 }});
slide1.addText('KIND OF A BIG DILL RACING', { x: '5%', y: '40%', w: '90%', fontSize: 48, fontFace: 'Impact', color: 'FFFFFF', align: 'center' });
slide1.addText('2026 SPONSORSHIP PROPOSAL', { x: '5%', y: '50%', w: '90%', fontSize: 36, fontFace: 'Impact', color: '39FF14', align: 'center' });
slide1.addText('Precision Engineering Meets High-Performance Speed', { x: '5%', y: '60%', w: '90%', fontSize: 18, fontFace: 'Montserrat', color: 'FFFFFF', align: 'center' });

// SLIDE 2: About the Team
let slide2 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide2.addImage({ path: 'assets/FB_IMG_1780578645493.jpg', x: 0, y: 0, w: '40%', h: '100%', sizing: { type: 'cover' } });
slide2.addText('ABOUT THE TEAM', { x: '45%', y: '10%', w: '50%', fontSize: 36, fontFace: 'Impact', color: '39FF14' });
slide2.addText('Team Principal: Dillon Smith', { x: '45%', y: '25%', w: '50%', fontSize: 24, fontFace: 'Impact', color: 'FFFFFF' });
slide2.addText('U.S. Air Force Veteran (2W251 Nuclear Weapons Specialist)\nSenior Product Engineer', { x: '45%', y: '32%', w: '50%', fontSize: 16, fontFace: 'Arial', color: 'FFFFFF' });
slide2.addText('The Riders:', { x: '45%', y: '45%', w: '50%', fontSize: 20, fontFace: 'Impact', color: 'FFFFFF' });
slide2.addText('Dillon "Big Dill" Smith (Lead Rider)\nDylan "Kentucky Kid" Yelton (Amateur Rider)\nAndrew "Hooligan" Perry (Amateur Rider)', { x: '45%', y: '50%', w: '50%', fontSize: 16, fontFace: 'Arial', color: 'FFFFFF', bullet: true });
slide2.addText('The Machines:', { x: '45%', y: '70%', w: '50%', fontSize: 20, fontFace: 'Impact', color: 'FFFFFF' });
slide2.addText('Premium 2021 Ducati Panigale V2 (955cc twin)', { x: '45%', y: '75%', w: '50%', fontSize: 16, fontFace: 'Arial', color: 'FFFFFF' });

// SLIDE 3: Engineering Meets Telemetry
let slide3 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide3.addText('ENGINEERING MEETS TELEMETRY', { x: '5%', y: '5%', w: '90%', fontSize: 36, fontFace: 'Impact', color: '39FF14' });
slide3.addText('The Data-Driven Competitive Edge', { x: '5%', y: '15%', w: '90%', fontSize: 20, fontFace: 'Arial', color: 'FFFFFF' });
slide3.addText('Applying rigorous product engineering principles directly to racetrack performance.\nConsistently running an elite, competitive 2:00 - 2:02 amateur pace at NCM Motorsports Park.\nTracking precise lap-telemetry using custom-integrated RaceBox GPS hardware.\nProcessing raw data through our custom-developed "KBD Track Engineer App" to optimize lines.', { x: '5%', y: '25%', w: '50%', fontSize: 16, fontFace: 'Arial', color: 'FFFFFF', bullet: true });
slide3.addImage({ path: 'assets/Screenshot 1.jpg', x: '60%', y: '20%', w: '18%', h: '60%', sizing: { type: 'contain' } });
slide3.addImage({ path: 'assets/Screenshot 2.jpg', x: '80%', y: '20%', w: '18%', h: '60%', sizing: { type: 'contain' } });
slide3.addText('KBD Digital Data Engineer Map', { x: '58%', y: '82%', w: '22%', fontSize: 12, fontFace: 'Arial', color: 'CCCCCC', align: 'center' });
slide3.addText('AI Race Engineer Telemetry', { x: '78%', y: '82%', w: '22%', fontSize: 12, fontFace: 'Arial', color: 'CCCCCC', align: 'center' });

// SLIDE 4: Podium Performance & Community Impact
let slide4 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide4.addImage({ path: 'assets/FB_IMG_1780578614560.jpg', x: 0, y: 0, w: '20%', h: '100%', sizing: { type: 'cover' } });
slide4.addImage({ path: 'assets/_B0A4077.jpg', x: '20%', y: 0, w: '20%', h: '100%', sizing: { type: 'cover' } });
slide4.addText('PODIUM PERFORMANCE & IMPACT', { x: '45%', y: '10%', w: '50%', fontSize: 30, fontFace: 'Impact', color: '39FF14' });
slide4.addText('Over 15 amateur podium finishes across three competitive race organizations.\nGrowing brand presence with thousands of active social media supporters.\nHighly visible paddock presence at N2 Track Days, Precision Trackdays, and Fast Line Track Days.\nDedicated off-season indoor kart track training and racing aboard a 50CC CRF mini-bike.', { x: '45%', y: '25%', w: '50%', fontSize: 16, fontFace: 'Arial', color: 'FFFFFF', bullet: true });
slide4.addText('Current Partners:', { x: '45%', y: '65%', w: '50%', fontSize: 20, fontFace: 'Impact', color: 'FFFFFF' });
slide4.addText('Official Technical Sponsor: RaceBox Pro (Promo Code: KBD15)', { x: '45%', y: '72%', w: '50%', fontSize: 16, fontFace: 'Arial', color: 'FFFFFF' });

// SLIDE 5: Partner With Us
let slide5 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide5.addImage({ path: 'assets/FB_IMG_1780578645493.jpg', x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' } });
slide5.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: '100%', fill: { type: 'solid', color: '121212', alpha: 40 }});
slide5.addText('PARTNER WITH US', { x: '10%', y: '10%', w: '80%', fontSize: 36, fontFace: 'Impact', color: '39FF14', align: 'center' });
slide5.addText('Title Sponsor\nExclusive motorcycle livery branding, premier apparel placement, dedicated social media campaigns, and title paddock-banner display.', { x: '10%', y: '25%', w: '80%', fontSize: 18, fontFace: 'Arial', color: 'FFFFFF', align: 'center', bold: true });
slide5.addText('Associate Sponsor\nSecondary livery branding, apparel logos, and consistent social media mentions.', { x: '10%', y: '45%', w: '80%', fontSize: 18, fontFace: 'Arial', color: 'FFFFFF', align: 'center', bold: true });
slide5.addText('Product Sponsor\nPaddock equipment/apparel showcases, paddock-social-hour product sampling, and logo placement.', { x: '10%', y: '60%', w: '80%', fontSize: 18, fontFace: 'Arial', color: 'FFFFFF', align: 'center', bold: true });
slide5.addText('CONTACT US', { x: '10%', y: '78%', w: '80%', fontSize: 24, fontFace: 'Impact', color: '39FF14', align: 'center' });
slide5.addText('Dillon Smith | insolublenitrate@gmail.com | (513) 926-1478', { x: '10%', y: '88%', w: '80%', fontSize: 16, fontFace: 'Arial', color: 'FFFFFF', align: 'center' });

pptx.writeFile({ fileName: 'KBD_Racing_2026_Sponsorship_Deck.pptx' })
  .then(fileName => {
      console.log(`Successfully created ${fileName}`);
  });
