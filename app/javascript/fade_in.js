var aboutTitle = document.getElementsByClassName("about__header")[0];
var aboutSectionText = document.getElementsByClassName("about")[0];
var technologyTitle = document.getElementsByClassName(
  "about__section__skills__title"
)[0];
var technologySectionText = document.getElementsByClassName(
  "about__section skills"
)[0]; 

var framework = (title, section) => {
  let documentHeight = window.innerHeight;
  let sectionTop = title.getBoundingClientRect().top;
  if (documentHeight > sectionTop) {
    title.style.opacity = "1";
    section.style.opacity = "1";
  } else {
    title.style.opacity = "0";
    
    section.style.opacity = "0";
  }
};

let init = () => {
  document.addEventListener("scroll", (e) => {
    framework(aboutTitle, aboutSectionText);
    framework(technologyTitle, technologySectionText);

    /*
    var windowHeight = window.innerHeight;
    var top = aboutTitle.getBoundingClientRect().top;
    if (top < windowHeight) {
      aboutSectionText.style.opacity = "1";
    } else {
      aboutSectionText.style.opacity = "0";
    }
    */
  });
};
init();