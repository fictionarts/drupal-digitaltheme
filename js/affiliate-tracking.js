(function () {
  'use strict';

  document.addEventListener('click', function (event) {
    const link = event.target.closest('#featured-products .product-card a');

    if (!link) {
      return;
    }

    if (typeof gtag !== 'function') {
      return;
    }

    gtag('event', 'affiliate_click');
  });
})();
