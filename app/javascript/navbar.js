var navbar = document.getElementById("mynavbar");
var navAnchorTag = document.getElementsByClassName("navbar__anchortag");

var initScroll = 0;
var projectNames = ["home", "about", "all__projects", "form"];
var projectSections = [];

for (let i = 0; i <= 3; i++) {
  projectSections.push(document.getElementsByClassName(projectNames[i])[0]);
}

let initNavbar = () => {
  navAnchorTag = [...navAnchorTag];
  navAnchorTag.map((el, index) => {
    el.onclick = () => {
      projectSections[index].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    };
  });
  window.addEventListener("scroll", (e) => {
    var formerVal = window.scrollY;
    var presentVal = window.scrollY;
    var scrollTop = window.scrollY;
    // assign value to init scroll
    if (initScroll === 0) {
      navbar.classList.add("toggle2");
    } else {
      navbar.classList.remove("toggle2");
    }
    if (initScroll <= formerVal) {
      initScroll = formerVal;
      navbar.classList.add("toggled");
      //down
    } else {
      initScroll = presentVal;
      //up
      if (initScroll === 0) {
        navbar.classList.remove("toggled");
        navbar.classList.add("toggle2");
      } else {
        navbar.classList.remove("toggled");
      }
    }
  });
};
initNavbar();