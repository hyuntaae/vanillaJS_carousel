const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const slide = document.querySelector('.slide-container');
let now = 1;

nextBtn.addEventListener('click', function(){
  if (now == 1) {
    slide.style.transform = 'translateX(-100vw)';
    now += 1;
    console.log(now);
  } else if (now == 2) {  
    slide.style.transform = 'translateX(-200vw)';
    now += 1;
    console.log(now);
  }
})

prevBtn.addEventListener('click', function(){
  if (now == 3) {
    slide.style.transform = 'translateX(-100vw)';
    now -= 1;
    console.log(now);
  } else if (now == 2) {
    slide.style.transform = 'translateX(0vw)';
    now -= 1;
    console.log(now);
  }
})

