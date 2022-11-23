// * FADE

window.addEventListener('scroll', () => {

    function fade(position){
        const element = document.querySelectorAll(`.fade${position}`);

        let i = 0;
        while(i < element.length){

            element[i].classList.add(`fade${position}`);

            if(element[i].getBoundingClientRect().top <= (window.innerHeight/1.2)){
                element[i].classList.add(`showFade`);
            }else{
                element[i].classList.remove(`showFade`);
            }
            i++;
        }
    }

    fade('Left');
    fade('Right');
    fade('Up');
    fade('Down');

});


