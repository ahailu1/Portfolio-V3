var aboutTitle = document.getElementsByClassName("about__header")[0];
var aboutSectionText = document.getElementsByClassName("about")[0];

var windowHeight = window.innerHeight;
let init = () => {
  document.addEventListener("scroll", (e) => {
    var top = aboutTitle.getBoundingClientRect().top;
    console.log(aboutTitle);
    console.log(aboutSectionText);
    if (top < windowHeight) {
      aboutSectionText.style.opacity = "1";

      //if the section's top is less than the window height, it means that it is
      //within the documents viewport
    } else {
      aboutSectionText.style.opacity = "0";
    }

    console.log("hello");
    console.log(windowHeight);
    console.log(top);
  });
};
export default init;
