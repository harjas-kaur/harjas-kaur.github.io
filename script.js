const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    cards.forEach((card) => {
      card.classList.toggle('is-hidden', selected !== 'all' && card.dataset.category !== selected);
    });
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const copyButton = document.querySelector('.copy-email');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    copyButton.querySelector('span').textContent = 'Copied';
    window.setTimeout(() => { copyButton.querySelector('span').textContent = 'Copy'; }, 1600);
  } catch {
    copyButton.querySelector('span').textContent = 'Select email';
  }
});