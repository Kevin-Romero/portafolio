// * FADE

window.addEventListener('scroll', () => {

    const element = document.querySelectorAll(`.popUp`);

    let i = 0;

    while(i < element.length){

        if(window.pageYOffset > (document.querySelector("#skills").offsetTop/1.6)){
                element[i].classList.add(`showPopUp`);
        }else{
            element[i].classList.remove(`showPopUp`);
        }
        i++;
    }
});


