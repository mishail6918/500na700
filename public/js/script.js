window.onload = function () {
    function navigation() {
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach((element) => {
            element.addEventListener('mouseenter', function () {
                const id = element.id;
                const el = document.querySelector('#block' + id);
                if (el) {
                    document.querySelector('.sub-nav').classList.add('sub-nav--active');
                    element.classList.add('nav__link--active');
                    el.classList.add('sub-nav__block--active');
                    document.querySelector('body').classList.add('overlay-body');
                }
            });
            element.addEventListener('mouseleave', function (e) {
                const id = element.id;
                const el = document.querySelector('#block' + id);
                if (e.relatedTarget !== document.querySelector('.sub-nav')) {
                    document.querySelector('.sub-nav').classList.remove('sub-nav--active');
                    element.classList.remove('nav__link--active');
                    if (el) {
                        el.classList.remove('sub-nav__block--active');
                        document.querySelector('body').classList.remove('overlay-body');
                    }
                }
            });
            document.querySelector('.sub-nav').addEventListener('mouseleave', function () {
                const id = element.id;
                const el = document.querySelector('#block' + id);
                if (el) {
                    document.querySelector('.sub-nav').classList.remove('sub-nav--active');
                    element.classList.remove('nav__link--active');
                    el.classList.remove('sub-nav__block--active');
                    document.querySelector('body').classList.remove('overlay-body');
                }
            })
        });
    }

    function mobileNav() {
        const mobNav = document.querySelector('.mobile-nav');
        document.querySelector('body').addEventListener('click', function (e) {
            if (document.querySelector('.header__burger').contains(e.target)) {
                mobNav.style.display = 'initial';
                setTimeout(() => {
                    mobNav.classList.add('mobile-nav--active');
                    document.querySelector('body').classList.add('overlay-body');
                }, "100");
            }
            else if (!mobNav.contains(e.target)) {
                closeNav(mobNav);
            }
        });
        document.querySelector('.menu__close').addEventListener('click', function () {
            closeNav(mobNav);
        });
    }

    function closeNav(mobNav) {
        mobNav.classList.remove('mobile-nav--active');
        document.querySelector('body').classList.remove('overlay-body');
        setTimeout(() => {
            mobNav.style.display = 'none';
        }, "100");
        closeMobileSubMenu();
    }

    function mobileSubMenu() {
        const links = document.querySelector('.mobile-nav').querySelectorAll('.menu__link');
        links.forEach((element) => {
            element.addEventListener('click', function () {
                if (element.nextElementSibling) {
                    element.nextElementSibling.classList.toggle('menu__submenu--active');
                }
            })
        });
    }

    function closeMobileSubMenu() {
        const links = document.querySelector('.mobile-nav').querySelectorAll('.menu__link');
        links.forEach((element) => {
            if (element.nextElementSibling) {
                element.nextElementSibling.classList.remove('menu__submenu--active');
            }
        });
    }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        spaceBetween: 20,
        initialSlide: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var newsSwiper = new Swiper(".news-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
        breakpoints: {
            320: {
                centeredSlides: false,
            },
            480: {
                centeredSlides: true,
            },
        }
    });

    function accordion() {
        const items = document.querySelectorAll('.list__item');
        items.forEach((element) => {
            element.addEventListener('click', function () {
                items.forEach((el) => {
                    if (el.classList.contains('list__item--active')) {
                        el.classList.remove('list__item--active');
                    }
                });
                element.classList.add('list__item--active');
            })
        });
    }

    function mask() {
        const element = document.getElementById('phone');
        const maskOptions = {
            mask: '+{7}(000)000-00-00'
        };
        const mask = IMask(element, maskOptions);
    }

    navigation();
    mobileNav();
    mobileSubMenu();
    accordion();
    mask();
}
