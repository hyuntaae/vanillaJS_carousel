let now = 1;

document.querySelector('#next').addEventListener('click', function(){
  if (now == 1) {
    now += 1;
    console.log(now);
    document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
  } else if (now == 2) {
    now += 1;    
    console.log(now);
    document.querySelector('.slide-container').style.transform = 'translateX(-200vw)';
  }
})

document.querySelector('#prev').addEventListener('click', function(){
  if (now == 3) {
    now -= 1;
    console.log(now);
    document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
  } else if (now == 2) {
    now -= 1;
    console.log(now);
    document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
  }
})

