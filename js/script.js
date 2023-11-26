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
        $('.silder-attach').html(`
        <button class="search" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
            <i class="bi bi-search "></i>
        </button>
        <div class="slider-container">
          <span class="bar">
            <span class="fill" style="width:${((carousel.relative(carousel.current()) + 1)/ carousel.items().length)*100}%;">
            </span>
          </span>
          <input id="slider" name="price" class="slider" type="range" min="0" max="${carousel.items().length}" value="${carousel.relative(carousel.current()) + 1}" disabled>
        </div>
        <div class="slider-counter">
            <span class="len"> ${NumOf(carousel.items().length)} </span>
            <span class="len mx-1">/</span>
            <span class="current">${NumOf(carousel.relative(carousel.current()) + 1)}</span>
        </div>
        `);
    }).owlCarousel({
        items: 1,
        rtl: true,
        loop:true,
        margin:0,
        nav:false,
        autoplay: true
    });

    $(".partner .owl-carousel").owlCarousel({
        margin:20,
        loop:true,
        dots: false,
        nav: false,
        // items: 6,
        rtl: true,
        responsive:
        {
            992:{
                items: 6
            },
            768:{
                items: 4
            },
            0: {
                items: 3,
                margin: 0
            }
        }
    });  

    $(".services .owl-carousel").owlCarousel({
        margin:0,
        dots: false,
        nav: true,
        items: 4,
        rtl: true,
        navText : ['<i class="bi bi-chevron-double-right"></i>','<i class="bi bi-chevron-double-left"></i>'],
        responsive:
        {
            992:{
                items: 4
            },
            768:{
                items: 3
            },
            0: {
                items: 2,
            }
        }
    }); 
    
    var btn_top = $('.toTop');
    // var btn_bottom = $('.scroll-bottom');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn_top.show();
      } else {
        btn_top.hide();
      }
    });
});