document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector('.site-footer p');

  if (footerText) {
    footerText.textContent = `Helping businesses grow with powerful strategy and focused execution since ${year}.`;
  }
});
