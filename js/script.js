$(document).ready(function(){
    $('#loading').fadeOut(500);
});

$('body').append('<a aria-label="developer portfolio" href="https://wesam-sakr.github.io/Portfolio/" accesskey="w" target="_blank"></a>')


  
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').each(function(){
        $(this).removeClass('active')
    })
    $(this).addClass('active')
})


$("header .owl-carousel").owlCarousel({
    margin:0,
    loop:true,
    dots: true,
    nav: false,
    items: 1,
    rtl: true,
    // autoplay:true
});  

$(".partner .owl-carousel").owlCarousel({
    margin:20,
    loop:true,
    dots: true,
    nav: false,
    items: 6,
    rtl: true,
});  
