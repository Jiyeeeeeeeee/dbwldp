const current = window.location.pathname;

document.querySelectorAll('.link').forEach(link => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});