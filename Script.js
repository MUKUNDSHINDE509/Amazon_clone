//locomotive code with scrollTringger
function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();






}

loco();

//animation with gsap


//side slider code

function side_swiperimg(){

  let side_swiperimg = document.querySelector('.side_swiperimg');
  let img = side_swiperimg.querySelector('img');
  let left = document.querySelector('.left');
  let right = document.querySelector('.right');

  let leftval = 250;
  let rightval = 250;

  left.addEventListener('click',function(){

    leftval -= 100;
    side_swiperimg.style.transform = `translate(${leftval}%,0)`;

    if(leftval == -250){
      leftval = 150;
    }
  })

  right.addEventListener('click',function(){

    leftval -= 100;
    side_swiperimg.style.transform = `translate(${leftval}%,0)`;

    if(leftval == -250){
      leftval = 150;
    }
  })


}

side_swiperimg();



//elctronic swiper

function electronicswipe(){
  let elcswipe = document.querySelector('.elcswipe');
  let leftbtns = document.querySelector('.leftbtns');
  let rightbtns = document.querySelector('.rightbtns');

  let leftbtnsval = 0;
  let rightbtnsval = 0;
  const maxTranslation = 144;

  leftbtns.addEventListener('click', function () {
    if (rightbtnsval !== 0) {
      rightbtnsval += 30;
      elcswipe.style.transform = `translate(${rightbtnsval}%, 0)`;
    } else if (leftbtnsval < maxTranslation) {
      leftbtnsval += 30;
      elcswipe.style.transform = `translate(${leftbtnsval}%, 0)`;
    }
  });

  rightbtns.addEventListener('click', function () {
    if (leftbtnsval !== 0) {
      leftbtnsval -= 30;
      elcswipe.style.transform = `translate(${leftbtnsval}%, 0)`;
    } else if (rightbtnsval > -maxTranslation) {
      rightbtnsval -= 30;
      elcswipe.style.transform = `translate(${rightbtnsval}%, 0)`;
    }
  });





}
electronicswipe();
//deals swiper


function dealsswipe(){
  let accesories = document.querySelector('.accesories');
  let swiper2leftbtn = document.querySelector('.swiper2leftbtn');
  let swiper2rightbtn = document.querySelector('.swiper2rightbtn');

  let swiper2leftbtnval = 0;
  let swiper2rightbtnval = 0;

  let lefttrueval = 20;
  let righttrueval = -100;

  swiper2leftbtn.addEventListener("click",function(){
      swiper2leftbtnval -=10;
      accesories.style.transform = `translate(${swiper2leftbtnval}%,0)`;
      console.log(swiper2leftbtnval);
      if(swiper2leftbtnval == -100){
        swiper2leftbtnval = lefttrueval;
      }
  })

  swiper2rightbtn.addEventListener("click",function(){
    swiper2rightbtnval +=10;
    accesories.style.transform = `translate(${swiper2rightbtnval}%,0)`;
    console.log(swiper2rightbtnval);
    if(swiper2rightbtnval == 20){
      swiper2rightbtnval = righttrueval;
    }
  })

}

dealsswipe();


function gamesswipe(){

  let games = document.querySelector('.games');
  let swiper3left = document.querySelector('.swiper3left');
  let swiper3right = document.querySelector('.swiper3right');

  let swiper3leftval = 0;
  let swiper3rightval = 0;

  let trueswipe3left = 0;
  let trueswipe3right = 0;


  swiper3left.addEventListener("click",function(){
    swiper3leftval +=10;
    // console.log(swiper3leftval);
    games.style.transform = `translate(${swiper3leftval}%,0)`;

    if(swiper3leftval == 160){
      swiper3leftval = trueswipe3left;
    }
  })

  swiper3right.addEventListener("click",function(){
    swiper3rightval -=10;
    // console.log(swiper3rightval);
    games.style.transform = `translate(${swiper3rightval}%,0)`;

    if(swiper3rightval == -160){
      swiper3rightval = trueswipe3right;
    }
  })

}
gamesswipe();