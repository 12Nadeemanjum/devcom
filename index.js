let currentslide = 0;

function showslide()
{
    const wrapper = document.querySelector('.slider-wrapper')
    const slidewidth = document.querySelector('.slider-image').clientWidth;
    wrapper.computedStyleMap.tranform = `translatex(${-currentSlide*slideWidth}px)`
    ;

}
function prevSlide()
{
if(currentslide>o)
{
    currentslide--;
}
else{
    currentslide=1;
}
showslide();
}

function prevSlide()
{
if(currentslide < 1)
{
    currentslide++;
}
else{
    currentslide=0;
}
showslide();
}


