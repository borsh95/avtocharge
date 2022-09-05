document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sv-slider', {
        navigation: {
            nextEl: '.next-wrapper',
            prevEl: '.prev-wrapper'
        },
        slideToClickedSlide: true,
        slidesPerView: 4.5,
        spaceBetween: 36,
        slidesPerGroup: 2,
        touchRatio: 1,
        initialSlide: 1,
        grabCursor: true,
        speed: 800,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2.5,
                // centeredSlides: true,
                initialSlide: 1,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 2.5,
                initialSlide: 1,
                slideActiveClass: 'active-slide',
                // centeredSlides: true,
                spaceBetween: 20
            },
            // when window width is >= 480px
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 640px
            1250: {
                slidesPerView: 4.5,
                spaceBetween: 36
            }
        }
    })
})