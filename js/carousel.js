$('.owl-carousel-clients').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



var owl = $('.owl-carousel-marcas');
owl.owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoWidth:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:5
        }
    }
})