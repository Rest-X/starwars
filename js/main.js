$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        navClass: ['slider__naw--left', 'slider__naw--right'],
        responsive:{
            0:{
                items:1
            },
            580:{
                items:2
            },
            870:{
                items:3
            },
            1160:{
                items:4
            }
        }
    })
});
