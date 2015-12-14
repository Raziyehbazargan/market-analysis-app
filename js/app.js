
var path = './img/';
var total = 0;

var img_Choice1 = document.getElementById('img1');
var img_Choice2 = document.getElementById('img2');
var img_Choice3 = document.getElementById('img3');

var images_array = [
  img1={name:'bag.jpg',price:'200',num:1 },
  img2={name:'banana.jpg',price:'100',num:2 },
  img3={name:'boots.jpg',price:'200',num:1 },
  img4={name:'chair.jpg',price:'50',num:1 },
  img5={name:'cthulhu.jpg',price:'200',num:3 },
  img6={name:'dragon.jpg',price:'400',num:3 },
  img7={name:'pen.jpg',price:'200',num:3 },
  img8={name:'scissors.jpg',price:'200',num:1 },
  img9={name:'shark.jpg',price:'200',num:2 },
  img10={name:'sweep.png',price:'200',num:1 },
  img11={name:'unicorn.jpg',price:'200',num:1 },
  img12={name:'usb.gif',price:'200',num:2 },
  img13={name:'water_can.jpg',price:'200',num:3 },
  img14={name:'wine_glass.jpg',price:'200',num:1 }
];


function getRandomImage() {
return Math.floor(Math.random() * images_array.length);
}

img_Choice1.src = path + images_array[getRandomImage()]['name'];
img_Choice2.src = path + images_array[getRandomImage()]['name'];
img_Choice3.src = path + images_array[getRandomImage()]['name'];
