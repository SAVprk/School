const btnBurger = document.querySelector('#burger');
const burgerMenu = document.querySelector('#burger_menu');

btnBurger.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger_menu_active');
    // document.querySelector('.burger_menu').style.borderBottom = '1px solid rgba(197, 207, 243, 0.6)';
});


// $('.owl-carousel').owlCarousel({
//     center: true,
//     loop:true,
//     margin:100,
//     nav:false,
//     dots:false,
//     responsive:{
//         320:{
//             items:1
//         },
//         1000:{
//             items:1
//         },
//         1200:{
//             items:2
//         }
//     }
// });

const swiper = new Swiper('.swiper', {
    loop: true,

  });