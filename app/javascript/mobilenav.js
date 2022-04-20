let mobileHeadings = ["home", "about", "all__projects", "form"];
let item = (navItem, scrollLocation, index) => {
    let menuItem = document.getElementsByClassName(navItem)[index];
    let scrollTo = document.getElementsByClassName(scrollLocation)[0];
    menuItem.onclick = () => { scrollTo.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });  
      console.log(menuItem);      
    }
    }


item('navbar__mobile__item','home',0);
item('navbar__mobile__item','about',1);
item('navbar__mobile__item','all__projects',2);
item('navbar__mobile__item','form',3);