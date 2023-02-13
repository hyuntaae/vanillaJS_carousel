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

// 확장성 있는 코드
// 슬라이드에 이미지 추가에 대응한 코드

/* let count = 0;

nextBtn.addEventListener('click', function(){
  count++;
  slide.style.transform = `translateX(-${count}00vw)`;
  console.log(count);
})

prevBtn.addEventListener('click', function(){
  count--;
  slide.style.transform = `translateX(-${count}00vw)`;
  console.log(count);
}) */
