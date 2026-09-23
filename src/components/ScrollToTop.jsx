import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls the window back to the top whenever the route changes.
// Without this, clicking Home/About/etc. keeps the old scroll position,
// making the new page look cut off instead of full shape.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
