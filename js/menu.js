const menu = document.querySelector("#menu");
let altura = document.querySelector("#quiensoy").offsetTop;

window.addEventListener("scroll", () => {
    if(window.pageYOffset > (altura - 10)){
        menu.classList.add("scrollMenu");
    }else{
        menu.classList.remove("scrollMenu");
    }
});

