(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const label = document.querySelector('.theme-label');
  const storedTheme = localStorage.getItem('doniyor-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setTheme(theme) {
    root.dataset.theme = theme;
    const isDark = theme === 'dark';
    icon.textContent = isDark ? '☀' : '☾';
    label.textContent = isDark ? 'Light mode' : 'Dark mode';
    button.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  }

  setTheme(storedTheme || (systemPrefersDark ? 'dark' : 'light'));
  button.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('doniyor-theme', nextTheme);
  });

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const menuLinks = document.querySelectorAll('.nav-links a');

  menuButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  menuLinks.forEach(link => link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  }));
})();
