const containerSlider = document.querySelector(".container-slider");
const slides = document.querySelectorAll(".slides");
let allSlidesWidth = null
let slidelocation = 0
let slideLength = slides.length - 1
function sliderHandler() {
    slides.forEach(slide=>{
        allSlidesWidth += slide.clientWidth
    })
setInterval(() => {
    if(slidelocation == 0){
        slidelocation++
        slides[0].style.transition = "all 0.5s ease-in-out"
        slides[0].style.marginRight = `-${slidelocation * slides[0].clientWidth}px`
    }else if(slidelocation==slideLength){
        slidelocation = 0
        slides[0].style.transition = "all 0.2s ease-in-out"
         slides[0].style.marginRight = `-${slidelocation * slides[0].clientWidth}px`
    }else if(slidelocation<=slideLength){
        slidelocation++
        slides[0].style.marginRight = `-${slidelocation * slides[0].clientWidth}px`
        slides[0].style.transition = "all 0.5s ease-in-out"
    }
    console.log(slidelocation)
}, 6000);
}
sliderHandler()