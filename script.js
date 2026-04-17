const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();

const orbs = document.querySelectorAll('.orb');
window.addEventListener('pointermove', (event) => {
  const { innerWidth, innerHeight } = window;
  const x = (event.clientX / innerWidth - 0.5) * 10;
  const y = (event.clientY / innerHeight - 0.5) * 10;

  orbs.forEach((orb, index) => {
    const depth = (index + 1) * 0.9;
    orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});
