const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

const setTheme = (theme) => {
  body.setAttribute('data-theme', theme);
  themeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.theme === theme);
  });
};

themeButtons.forEach((button) => {
  button.addEventListener('click', () => setTheme(button.dataset.theme));
});

setTheme('sunset');
