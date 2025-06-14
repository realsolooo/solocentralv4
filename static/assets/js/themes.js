function live() {
  var bgUrl = localStorage.getItem('bgUrl');
  var selectedTheme = localStorage.getItem('selectedOption');
  var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(#menu):not(#sidebar):not(.themesExcluded), .tabBtn');

  function applyTheme(bgColor, bgImageOrGradient) {
    containers.forEach(container => container.style.backgroundColor = bgColor);
    document.body.style.background = bgImageOrGradient;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  if(bgUrl === null || bgUrl === 'none' || bgUrl === '') {
    switch(selectedTheme) {
      case 'fal':
        applyTheme('rgba(225, 0, 255, 0.8)', "linear-gradient(to bottom right, rgb(104, 8, 96), rgb(9, 34, 55), black)");
        break;
      case 'equinox':
        applyTheme('rgb(24 24 24 / 32%)', "url('/assets/img/equinox.webp')");
        document.querySelectorAll('input').forEach(inputElement => {
          inputElement.style.transition = '.2s';
          inputElement.style.backgroundColor = 'rgba(15, 15, 15, 0.89)';
          inputElement.style.boxShadow = '0 0 1px rgba(255, 255, 255, 0.267)';
          inputElement.style.opacity = '100%';
        });
        break;
      case 'solo':
        applyTheme('rgb(29, 38, 163)', "linear-gradient(to bottom, rgb(7, 6, 61), rgb(0, 0, 0))");
        break;
      case 'szvy':
        applyTheme('rgba(23, 7, 255, 0.52)', "linear-gradient(to right, rgb(0, 4, 255), rgb(4, 0, 255))");
        break;
      case 'frogiee':
        applyTheme('rgba(74, 255, 113, 0.32)', "linear-gradient(to right, rgb(0, 0, 0), rgb(151, 255, 174))");
        break;
      case 'sunset':
        applyTheme('rgb(24, 24, 24, 0.32)', "linear-gradient(to bottom, rgb(211, 112, 19), rgb(92, 16, 179))");
        break;
      default:
        applyTheme('rgba(19, 34, 48, 0.8)', "linear-gradient(to bottom right, rgb(16, 52, 82), rgb(9, 34, 55), black)");
    }
  }
  /* Ripple Effect for buttons */
  [].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
    el.addEventListener('mousedown', e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(),
        d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;
      el.offsetTop;
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
      if(el.classList.contains('90px')) {
        el.style.width = '90px';
      }
    })
  })
  /* Background Check */
  document.addEventListener('DOMContentLoaded', function() {
    if(bgUrl === 'none' || bgUrl === null || bgUrl === '') {
      console.log('[❌] Custom Background');
    }
    else {
      document.body.style.backgroundImage = `url(${bgUrl})`;
      document.getElementById('particles-js').remove();
      console.log('[✔️] Custom Background');
    }
  });
  console.log('[✔️] Themes Loaded');
}
live();