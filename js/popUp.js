// * FADE

altura = document.querySelector("#skills").offsetTop

window.addEventListener('scroll', () => {

        const element = document.querySelectorAll(`.popUp`);

        let i = 0;

        while(i < element.length){

            if(window.pageYOffset > (altura/1.4)){
                    element[i].classList.add(`showPopUp`);
            }else{
                element[i].classList.remove(`showPopUp`);
            }
            i++;
        }

});


