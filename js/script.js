$(document).ready(function(){
    $('#loading').fadeOut(500);

    $('body').append('<a aria-label="developer portfolio" href="https://wesam-sakr.github.io/Portfolio/" accesskey="w" target="_blank"></a>')

  
    $('.navbar-nav .nav-link').click(function(){
        $('.navbar-nav .nav-link').each(function(){
            $(this).removeClass('active')
        })
        $(this).addClass('active')
    })

    function NumOf(n) {
        return (n < 10 && n !=0) ? '0' + n : '' + n;
    }
    $('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
        return;
        }
        var carousel = e.relatedTarget;
        console.log(carousel.relative(carousel.current()))
        console.log(carousel.items().length);
        $('.slider-counter').html(`
        <span class="len"> ${NumOf(carousel.items().length)} </span>
        <span class="len mx-1">/</span>
        <span class="current">${NumOf(carousel.relative(carousel.current()) + 1)}</span>
        `);
    }).owlCarousel({
        items: 1,
        rtl: true,
        loop:true,
        margin:0,
        nav:true
    });

    // $("header .owl-carousel").owlCarousel({
    //     margin:0,
    //     loop:true,
    //     dots: true,
    //     nav: false,
    //     items: 1,
    //     rtl: true,
    //     // autoplay:true
    // });  

    $(".partner .owl-carousel").owlCarousel({
        margin:20,
        loop:true,
        dots: true,
        nav: false,
        items: 6,
        rtl: true,
    });  

    $(".services .owl-carousel").owlCarousel({
        margin:0,
        dots: false,
        nav: true,
        items: 4,
        rtl: true,
        navText : ['<i class="bi bi-chevron-double-right"></i>','<i class="bi bi-chevron-double-left"></i>']
    });  
});