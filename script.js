// JavaScript for interactive features

// Example hover effect
const examples = document.querySelectorAll(".example");

examples.forEach((example) => {
  example.addEventListener("mouseenter", () => {
    example.style.transform = "translateY(-10px)";
  });

  example.addEventListener("mouseleave", () => {
    example.style.transform = "translateY(0)";
  });
});

window.onload = function () {
  // Pilih semua elemen video
  var videos = document.querySelectorAll("video");

  // Buat observer untuk memantau ketika video memasuki viewport
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          // Jika video berada di viewport dan belum diputar, mulai memutar video
          if (video.paused) {
            video.muted = true; // Pastikan video dimute agar autoplay tidak terblokir
            video.play().catch(function (error) {
              console.log("Error attempting to play video:", error);
            });
          }
        }
      });
    },
    { threshold: 0.5 }
  ); // Sesuaikan threshold sesuai kebutuhan

  // Mulai mengamati setiap video
  videos.forEach(function (video) {
    observer.observe(video);
  });
};
