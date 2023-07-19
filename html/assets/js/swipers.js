
root = window.getComputedStyle(document.documentElement);


breakpoint800 = root.getPropertyValue('--breakpoint-800');
breakpoint800Query = '(min-width:'+breakpoint800+'px)';

breakpoint1100 = 1100;
breakpoint1100Query = '(min-width:'+1110+'px)';

        const swiper001 = new Swiper('#swiper-001', {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            breakpoints: {
                "@0.0": {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                "@0.75": {

                    slidesPerView: 4,
                    spaceBetween: 10
                },
            },
            navigation: {
                nextEl: '.swiper-001-button.swiper-button-next',
                prevEl: '.swiper-001-button.swiper-button-prev',
            },

        })
        const swiper002 = new Swiper('#swiper-002', {
            // Default parameters
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,

            // Responsive breakpoints
            breakpoints: {
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10
                },

                "@0.75": {

                    slidesPerView: 1,
                    spaceBetween: 10
                },

                "@1.00": {

                    slidesPerView: 2,
                    spaceBetween: 10
                },
                "@1.25": {

                    slidesPerView: 2,
                    spaceBetween: 10
                },
                "@1.5": {

                    slidesPerView: 4,
                    spaceBetween: 10
                }
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-002-button.swiper-button-next',
                prevEl: '.swiper-002-button.swiper-button-prev',
            },

        })



        let swiper003;

const enableSwiper003 = function() {
    
        swiper003 = new Swiper('#swiper-003', {
            loop: true,
            spaceBetween: 10,
            autoHeight: true,
            direction: 'horizontal',
                    slidesPerView: 3,

                    allowSlideNext: true,
                    allowSlidePrev: true,
                    allowTouchMove: true,	

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    direction: 'horizontal',
                    allowSlideNext: true,
                    allowSlidePrev: true,
                    allowTouchMove: true

                },
                600: {
                    slidesPerView: 2,
                    direction: 'horizontal',
                    allowSlideNext: true,
                    allowSlidePrev: true,
                    allowTouchMove: true
                },
                800: {
                    slidesPerView: 4,
                    direction: 'horizontal',
                    allowSlideNext: true,
                    allowSlidePrev: true,
                    allowTouchMove: true
                }
            },
            navigation: {
                nextEl: '.swiper-003-button.swiper-button-next',
                prevEl: '.swiper-003-button.swiper-button-prev',
            },

        })
        
    }

    const mql1100 = window.matchMedia(breakpoint1100Query);

    setSwiper(mql1100);
    mql1100.addEventListener('change', setSwiper, false);

    function setSwiper(e){
        if ( e.matches ) {
            if ( swiper003 !== undefined ) swiper003.destroy( true, true );            
         } else {
            enableSwiper003();
         }
    }