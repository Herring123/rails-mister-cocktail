import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Martini?", "Manhattan?", "Brooklyn?", "Daiquiri?", "Margarita?", "Negroni?", "Bloody Mary?"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
