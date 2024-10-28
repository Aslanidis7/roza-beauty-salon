export const checkBrowserSupport = () => {
  // Check for CSS Grid support
  if (window.CSS && CSS.supports('display', 'grid')) {
    document.documentElement.classList.add('css-grid');
  }

  // Check for Flexbox support
  if (CSS.supports('display', 'flex')) {
    document.documentElement.classList.add('flexbox');
  }

  // Check for CSS transitions support
  if (CSS.supports('transition', 'all 0.3s ease')) {
    document.documentElement.classList.add('transitions');
  }
};
