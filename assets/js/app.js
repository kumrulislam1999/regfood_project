$(function () {
    // ==== Start header_page click jQuery Event ===== //

    /*--===== Start Offer Section Here =====--*/

    $(".offer_sliding").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        slidesToShow: 2,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: "<i class='bx bx-arrow-back arrow arrow_left'></i>",
        nextArrow: "<i class='bx bx-arrow-back arrow arrow_right'></i>",
        appendArrows: $('.offer_arrow'),
    })


    /*--===== End Offer Section Here =====--*/

    /*--===== Start Team Section Here =====--*/

    $(".team_sliding").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        slidesToShow: 4,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: "<i class='bx bx-arrow-back arrow arrow_left'></i>",
        nextArrow: "<i class='bx bx-arrow-back arrow arrow_right'></i>",
        appendArrows: $('.team_arrow'),
    })

    /*--===== End Team Section Here =====--*/




    /*--===== Start Team Section Here =====--*/

    $(".playstore_sliding").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        slidesToShow: 4,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
    })

    /*--===== End Team Section Here =====--*/

    /*--===== Start Team Section Here =====--*/
    $(".testimonial_sliding").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        slidesToShow: 2,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: "<i class='bx bx-arrow-back arrow arrow_left'></i>",
        nextArrow: "<i class='bx bx-arrow-back arrow arrow_right'></i>",
        appendArrows: $('.testimonial_arrow'),
    })

    /*--===== End Team Section Here =====--*/


    /*--===== Start Team Section Here =====--*/

    $(".news_sliding").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        slidesToShow: 3,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: "<i class='bx bx-arrow-back arrow arrow_left'></i>",
        nextArrow: "<i class='bx bx-arrow-back arrow arrow_right'></i>",
        appendArrows: $('.news_arrow'),
    })

    /*--===== End Team Section Here =====--*/


    /*--===== Start Menu Details Section Here =====--*/
    $(".menu_main_slider").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: "<i class='bx bx-arrow-back arrow arrow_left'></i>",
        nextArrow: "<i class='bx bx-arrow-back arrow arrow_right'></i>",
        asNavFor: '.menu_mini_slider',
    })

    /*--===== End Menu Details Section Here =====--*/


    /*--===== Start Menu Details Section Here =====--*/

    $(".menu_mini_slider").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        slidesToShow: 5,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0px",
        prevArrow: "<i class='bx bx-arrow-back arrow arrow_left'></i>",
        nextArrow: "<i class='bx bx-arrow-back arrow arrow_right'></i>",
        asNavFor: '.menu_main_slider',
    })

    /*--===== End Menu Details Section Here =====--*/




    /*--===== Start Menu Details Section Here =====--*/

    $(".related_sliding").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        slidesToShow: 4,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0px",
        prevArrow: "<i class='bx bx-arrow-back arrow arrow_left'></i>",
        nextArrow: "<i class='bx bx-arrow-back arrow arrow_right'></i>",
        appendArrows: $('.related_arrow'),
    })

    /*--===== End Menu Details Section Here =====--*/




    /*--===== Start View_cart Page Section Here =====--*/

    $(".add_address_btn").on("click", function () {
        $('#form_section').addClass('active')
    })
    $(".checkout_popup_close").on("click", function () {
        $('#form_section').removeClass('active')
    })


    /*--===== End View_cart Page Section Here =====--*/





    /*--===== Start Dashboard Section Here =====--*/
    $(".edit_btn").on("click", function () {
        $('.personal_info_box').addClass("hide")
        $('.edit_info_box').addClass('show')
    })
    $(".cancel_btn").on("click", function () {
        $('.edit_info_box').removeClass('show')
        $('.personal_info_box').removeClass("hide")
    })
    /*--===== End Dashboard Section Here =====--*/

})


