(function () {
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); }
  });

  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lb-img');
  document.querySelectorAll('.gallery-item').forEach(function (b) {
    b.addEventListener('click', function () {
      img.src = b.dataset.full; img.alt = b.dataset.alt;
      if (lb.showModal) lb.showModal(); else window.open(b.dataset.full);
    });
  });
  document.getElementById('lb-close').addEventListener('click', function () { lb.close(); });
  lb.addEventListener('click', function (e) { if (e.target.id === 'lb-wrap') lb.close(); });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
