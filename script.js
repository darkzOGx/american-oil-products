// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Drawer
const drawer = document.getElementById('drawer');
if (drawer) {
  const open  = () => { drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); };
  const close = () => { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); };
  const o1 = document.getElementById('openDrawer');  if (o1) o1.addEventListener('click', open);
  const o2 = document.getElementById('openDrawer2'); if (o2) o2.addEventListener('click', open);
  const oc = document.getElementById('closeDrawer'); if (oc) oc.addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

// Finder chips — single-select
const chips = document.querySelectorAll('.finder-chips .chip');
chips.forEach(c => c.addEventListener('click', () => {
  chips.forEach(x => x.setAttribute('aria-pressed', 'false'));
  c.setAttribute('aria-pressed', 'true');
}));
