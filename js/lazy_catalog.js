(function (Drupal) {

Drupal.behaviors.lazyCatalog = {

  attach(context) {

    const catalogs = context.querySelectorAll('.lazy-catalog');

    if (!catalogs.length) {
      console.log("No Catalogs found");
      return;
    }


    const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if(entry.isIntersecting) {

          const catalog = entry.target;

          fetch(
            catalog.dataset.viewUrl
          )
          .then(response => response.text())
          .then(html => {
            catalog.innerHTML = html;
            Drupal.attachBehaviors(catalog);
          });
          observer.unobserve(catalog);
        }
      });
    },
    {
      rootMargin: "400px"
    });
    catalogs.forEach(
      catalog => observer.observe(catalog)
    );
  }
};
})(Drupal);