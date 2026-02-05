
  //Minimal JS (Only for Mobile Menu Toggle) 
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav-open");
  });
  