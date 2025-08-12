// script.js
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("openMapBtn");

  btn.addEventListener("click", function () {
    const mapUrl = "https://www.google.com/maps/@-1.4504477,-45.7284907,3a,37.5y,319.91h,60.75t/data=!3m10!1e1!3m8!1seFFjw8iESZWeQglagS0dGg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D29.252371314699545%26panoid%3DeFFjw8iESZWeQglagS0dGg%26yaw%3D319.90715793297994!7i16384!8i8192!9m2!1b1!2i46?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D";
    window.open(mapUrl, "_blank");
  });
});

 document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.fade-in');
  const galleryItems = document.querySelectorAll('.gallery-item');

  function checkScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });

    if (document.querySelector('#meus-cortes').classList.contains('show')) {
      galleryItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 150); // Delay de 0.15s entre imagens
      });
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();
});
