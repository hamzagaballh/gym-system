// select landing page Element
let landingPage = document.querySelector(".landing-page");

// Get Array of Img
let imgsArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];





setInterval(() => {

    // Get random number
let randomNumber = Math.floor(Math.random() * imgsArray.length); 

    // change backgroung imge url

landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';

},15000);
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });

const paragraphs = document.querySelectorA11(".facilities_h1");

document.addEventListener("scroll", function () {
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph. classList.add ("facilities_h1--visible");
    }
  });
});
function isInView(element) {
const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 && 
    rect. top <
      (window.innerHeight - 150 || document.documentElement.
        clientHeight - 150)
  );
}