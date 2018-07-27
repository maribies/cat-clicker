let heroImg = document.getElementsByClassName('heroImg');
let countTitle = document.getElementsByClassName('countTitle');
let count = document.getElementsByClassName('count');
let counterRay = 0;
let counterLita= 0;


heroImg[0].addEventListener('click', function(){
  console.log('left-click');
  counterRay ++
  count[0].innerHTML = counterRay;
});
heroImg[1].addEventListener('click', function(){
  console.log('right-click');
  counterLita ++
  count[1].innerHTML = counterLita;
});


// class Cat {
//   constructor (name, love) {
//     this.name = name;
//     this.love = countClicks();
//   }
// }
//
// let Ray = new Cat();
