let holder = {
  c:0,
  b:0,
  e:0,
  y:"",
  z:"",
  d:"",
  a:"",
  t: document.querySelector('.typewriter'),
  h1: document.querySelector('h1'),
  u: document.querySelector('.loading'),
  load_text: document.querySelector('.loading-dot'),
  img_btn: document.querySelectorAll('.images'),
  x: ['. . . .','travelling','chilling','sleeping'],
  getBtn: function(){
    this.img_btn.forEach((item,index,arr)=>{
      arr[index].addEventListener('click',()=>{
        console.log(item);
      })
    })
  }
}
let {c,b,e,y,z,d,a,t,h1,u,load_text,img_btn,x} = holder;
let first = document.querySelector('.first');
let portfolio = document.querySelector('.portfolio');
let img = document.querySelectorAll('.imgs');

holder.getBtn();

function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve,ms));
}


class OnOff{
  onSec(){
    first.style.display = 'flex';
    portfolio.style.display = 'flex';
  }

  offSec(){
    first.style.display = 'none';
    portfolio.style.display = 'none';
  }
}

let toggleOnOff = new OnOff();

(async function effects(){
  (function dots(){
    d = x[0];
    a = d.slice(0,e+=2);
    load_text.textContent = a;
    console.log('still running');
    let time = setTimeout(dots,300);

    if (a.length === d.length) {
      console.log('timeout stopped');
      clearTimeout(time)
    }
  }());
  window.addEventListener('load',()=>{
    window.scrollTo(0,0);
  })
  u.classList.add('load');
  toggleOnOff.offSec();
  await sleep(2000);
  u.classList.remove('load');
  toggleOnOff.onSec();
  document.querySelector('.block').classList.add('add');
  u.style.display="none";
  await sleep(1500);
  (async function type(){
    if (c === x.length) {
      c = 0
    }
    y = x[c];
    z = y.slice(0,b++).toUpperCase();
    t.style.color = "#fff";
    t.textContent=z;
    if (z.length===y.length) {
      if (y==x[0]) {
        await sleep(1500);
      }
      await sleep(500);
      c++;
      b=0;
    }
    setTimeout(type,300);
  }());
}());

window.addEventListener('scroll',()=>{
  if (this.scrollY > portfolio.offsetTop-300) {
    img.forEach((item,idx,arr)=>{
      setTimeout(()=>{
        item.classList.add('show-img');
        $('.portfolio p').css({
          'display':'block',
          'transition':'display 1s ease-in-out'
        });
      },700);
    });
  }
})
