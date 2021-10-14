$(function () {
    $(".multiple-items").slick({
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }

        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }

        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
            }
        }]
    });

    $(".text-slider").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        nextArrow: '<div class="class-to-style"><span class="fa fa-chevron-right"></span><span class="sr-only">Prev</span></div>',
        prevArrow: '<div class="class-to-style"><span class="fa fa-chevron-left"></span><span class="sr-only">Next</span></div>'
    });

    $(".product-slider").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: '<div class="class-to-style"><span class="fa fa-chevron-right"></span><span class="sr-only">Prev</span></div>',
        prevArrow: '<div class="class-to-style"><span class="fa fa-chevron-left"></span><span class="sr-only">Next</span></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".auto-slider-5").slick({
        infinite: true,
        centerMode: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
