document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-bar');
  var nav = document.querySelector('.sidebar-nav');
  var block = document.querySelector('.sidebar-block');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    if (block) block.classList.toggle('open');
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.textContent = expanded ? 'Menu' : 'Close';
  });
});
