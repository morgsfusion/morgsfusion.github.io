document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    let lastScrollTop = 0;
  
    window.addEventListener("scroll", function() {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add("header-hidden");
        header.classList.remove("header-visible");
      } else {
        // Scroll up
        if (currentScrollTop > 0) {
          header.classList.remove("header-hidden");
          header.classList.add("header-visible");
        } else {
          // Reached the top
          header.classList.remove("header-hidden");
          header.classList.remove("header-visible");
        }
      }
  
      lastScrollTop = currentScrollTop;
    });
  });
  