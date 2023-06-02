const imageContainer = document.querySelector(".container-images");

const sliderLeft = document.querySelector(".slider-left");

const sliderRight = document.querySelector(".slider-right")

const upButton = document.querySelector(".button-up");

const downButton = document.querySelector(".button-down");

const qtdSlides = sliderRight.querySelectorAll("div").length;

let activeSlide = 0;

sliderLeft.style.top = `-${(qtdSlides - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));

downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
    const sliderHeight = imageContainer.clientHeight;
    if(direction === "up") {
        activeSlide++;
        if (activeSlide > qtdSlides - 1){
            activeSlide = 0;
        }

    }
    else if(direction === "down") {
        activeSlide--;
        if (activeSlide < 0) {
            activeSlide = qtdSlides - 1;
        }
    }
    sliderRight.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
    sliderLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
};