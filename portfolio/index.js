 // yha pe hum ne jquery use ki h isko ratta marlo.
 // tha pe mene slick slider website pe jake copy paste kiya h.
$(document).ready(function(){

    $('.slider').slick({
        arrow: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });


    let hamberger = document.querySelector(".hambuger");
    let times = document.querySelector(".times");

    let mobileNav = document.querySelector(".mobile_nav");

    hamberger.addEventListener('click',function(){
        mobileNav.classList.add('open');
    })
    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    })
})
