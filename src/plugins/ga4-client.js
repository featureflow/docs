// Same route-change page view the preset gtag plugin sends.
export default {
  onRouteDidUpdate({location, previousLocation}) {
    if (
      previousLocation &&
      (location.pathname !== previousLocation.pathname ||
        location.search !== previousLocation.search ||
        location.hash !== previousLocation.hash)
    ) {
      // react-helmet-async updates the title on the next tick.
      setTimeout(() => {
        if (typeof window.gtag !== 'function') {
          return;
        }
        window.gtag(
          'set',
          'page_path',
          location.pathname + location.search + location.hash,
        );
        window.gtag('event', 'page_view');
      });
    }
  },
};
