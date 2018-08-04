let heroImg = document.getElementsByClassName('heroImg');
let countTitle = document.getElementsByClassName('countTitle');
let count = document.getElementsByClassName('count');

//counter
for (var i = 0; i < heroImg.length; i++){
  let cat = heroImg[i];
  let counter = 0;
  let loveCounter = count[i];
  count[i].textContent = counter;

  cat.addEventListener('click', function(countCopy){
    return function(){
      counter ++
      loveCounter.textContent = counter;
    };
  }(cat));
}

//hide the cats initially
let catLink = document.getElementsByClassName('catLink');
let cats = document.getElementsByClassName('cat');

let hideCats = function(cat) {
  for (var i = 0; i < cats.length; i++) {
    let cat = cats[i];
    cat.style.display = 'none';
    console.log(cat);
  }
}
hideCats();

//show the cats on click
for (var i = 0; i < catLink.length; i++){
  let catName = catLink[i];
  let cats = document.getElementsByClassName('cat');
  let cat = cats[i];

  catName.addEventListener('click', function(){
    cat.style.display = 'block';
  })
}

//I think I should be making these cats with a constructor
// class Cat {
//   constructor (name, image, love) {
//     this.name = name;
//     this.image = image
//     this.love = countClicks();
//   }
// }
//
// let Ray = new Cat('Ray', );
