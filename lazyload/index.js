const images = document.querySelectorAll("img");

let imageOptions = {};

images.forEach((image) => {
  let observer = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const image = entry.target;
      const newURL = image.getAttribute("data-src");
      image.src = newURL;
      observer.disconnect();
    });
  }, imageOptions);
  observer.observe(image);
});
