document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav-links");
    const toggleBtn = document.getElementById("menu-toggle");

    function isMobile() {
        return window.innerWidth <= 768; // You can adjust this breakpoint
    }

    function scrollToContact() {
        const contact = document.getElementById("contact-section");
        if (contact) {
            contact.scrollIntoView({ behavior: "smooth" });
        } 
    }

    function toggleNavVisibility() {
        // Check the current state of the menu
        const isNavOpen = nav.classList.contains('open'); 

        if (isNavOpen) {
            // Close the menu (move it off-screen)
            nav.style.transform = "translateX(100%)";
            nav.classList.remove('open');
        } else {
            // Open the menu (move it to its position)
            nav.style.transform = "translateX(0)";
            nav.classList.add('open');
        }
    } 

    

    // Initially hide the nav menu off-screen on mobile
    if (isMobile()) {
        nav.style.transform = "translateX(100%)"; // Hide off-screen to the right
    }

    // Toggle the navigation menu on button click
    toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleNavVisibility(); // Toggle the visibility of the menu
    });

    // Adjust menu position when resizing the window
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            nav.style.transform = "translateX(0)"; // Show the menu normally on desktop
        } else {
            nav.style.transform = "translateX(100%)"; // Keep the menu hidden off-screen on mobile
        }
    });
});









// document.addEventListener("DOMContentLoaded", () => {
//     const nav = document.getElementById("nav-links");
//     const toggleBtn = document.getElementById("menu-toggle");
  
//     function isMobile() {
//       return window.innerWidth <= 768; // You can adjust this breakpoint
//     }
  
//     function scrollToContact() {
//       const contact = document.getElementById("contact-section");
//       if (contact) {
//         contact.scrollIntoView({ behavior: "smooth" });
//       }
//     }
  
//     function toggleNavVisibility() {
//       if (nav.style.display === "flex" || nav.style.display === "") {
//         nav.style.display = "none";
//       } else {
//         nav.style.display = "flex";
//       }
//     }
  
//     if (isMobile()) {
//       nav.style.display = "none"; // hide menu on load if mobile
  
//       toggleBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         toggleNavVisibility();  // Show/hide nav
//         scrollToContact();      // Scroll to contact form
//       });
//     }
  
//     window.addEventListener("resize", () => {
//       // Reset nav if resizing to desktop
//       if (!isMobile()) {
//         nav.style.display = "flex";
//       } else {
//         nav.style.display = "none";
//       }
//     });
//   });
  