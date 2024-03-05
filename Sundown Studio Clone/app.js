// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.wrapper'),
//     smooth: true
// });
function swiper(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 50,
    });
  }
  swiper();
  
  let loading=document.querySelector(".loading-page");
  let h1=loading.querySelector("h2");
  function textChange(){
    console.log('no error')
    setTimeout(function(){
      h1.innerText="CONTENT";
    },1000);
    setTimeout(function(){
      h1.innerText="ENVIRONMENT";
    },2000)
  }
  textChange();
  setTimeout(function(){
    loading.style.top="-100%"
  },3000)