
var allProducts=[];
var productNames = ['bag','banana','boots','chair','cthulhu','dragon','pen','scissors','shark','unicorn','water_can','wine_glass']

//define constructor instead of object literal
function Product(name, path){
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  this.TotalVotes = 0;
  allProducts.push(this);  //every product object add to a array this means an object
}


//short way instead of call 14 object seperately
function buildAlbum(){
  for (var i = 0; i < productNames.length; i++) {
    new Product(productNames[i], 'img/' + productNames[i] + '.jpg');
  }
}

//call the function
buildAlbum();


 var productRank = {
  totalVotes:0,
  leftObj:null,
  midObj:null,
  rightObj:null,

  leftEl: document.getElementById('imgOne'),
  middleEl: document.getElementById('imgTwo'),
  rightEl: document.getElementById('imgThree'),


  getRandomIndex: function() {
      return Math.floor(Math.random() * productNames.length)
    },

  displayImages: function() {
    this.leftObj = allProducts[productRank.getRandomIndex()];
    this.rightObj = allProducts[productRank.getRandomIndex()];
    this.midObj = allProducts[productRank.getRandomIndex()];

    if(productRank.leftObj===productRank.midObj || productRank.leftObj===productRank.rightObj || productRank.midObj===productRank.rightObj) {
      productRank.displayImages();
    }

    productRank.leftEl.src = productRank.leftObj.path;
    productRank.leftEl.id = productRank.leftObj.name;

    productRank.middleEl.src = productRank.midObj.path;
    productRank.middleEl.id = productRank.midObj.name;

    productRank.rightEl.src = productRank.rightObj.path;
    productRank.rightEl.id = productRank.rightObj.name;
    },

    showResults: function() {
        if(this.totalVotes%15 === 0){
          document.getElementById('button').hidden = false;
          // document.getElementById('results').hidden = false;
        }
        else {
          document.getElementById('button').hidden = true;
        }
    },
  };


productRank.leftEl.addEventListener('click',function(){
  // document.getElementById('results').hidden = true;
  deleteList();
  console.log('This is the old number:'+ productRank.leftObj.tally);
  // Increment the object's tally property and productRank's total clicks by 1
  productRank.leftObj.tally += 1;
  productRank.totalVotes+=1;
  console.log('this id the new number: ' + productRank.midObj.tally);
  // Call the showResults method to check whether there have been 15 clicks
  productRank.showResults();
  // Call the displayImages method to reroll three new images
  productRank.displayImages();

});

productRank.middleEl.addEventListener('click',function(){
  deleteList();
  // document.getElementById('results').hidden = true;
  console.log('This is the old number:'+productRank.midObj.tally);
  // Increment the object's tally property and productRank's total clicks by 1
  productRank.midObj.tally += 1;
  productRank.totalVotes+=1;
  console.log('this id the new number: ' +productRank.midObj.tally);
  // Call the showResults method to check whether there have been 15 clicks
  productRank.showResults();
  // Call the displayImages method to reroll three new images
  productRank.displayImages();
});

productRank.rightEl.addEventListener('click',function(){
  // document.getElementById('results').hidden = true;
  deleteList();
  console.log('This is the old number:'+ productRank.rightObj.tally);
  // Increment the object's tally property and productRank's total clicks by 1
  productRank.rightObj.tally += 1;
  productRank.totalVotes += 1;
  console.log('this id the new number: ' + productRank.rightObj.tally);
  // Call the showResults method to check whether there have been 15 clicks
  productRank.showResults();
  // Call the displayImages method to reroll three new images
  productRank.displayImages();
});

productRank.displayImages();



document.getElementById('button').addEventListener('click',function(){
    document.getElementById('button').hidden = true;
    // document.getElementById('results').hidden = false;

    listOfResults = document.getElementById('results');
    listRow1 = document.createElement('li');
    listRow1.textContent = productRank.leftObj.name +' the  number is : ' + productRank.leftObj.tally;
    listOfResults.appendChild(listRow1);

    listRow2 = document.createElement('li');
    listRow2.textContent = productRank.midObj.name +' the  number is : ' + productRank.midObj.tally;
    listOfResults.appendChild(listRow2);

    listRow3 = document.createElement('li');
    listRow3.textContent = productRank.rightObj.name +' the  number is : ' + productRank.rightObj.tally;
    listOfResults.appendChild(listRow3);

});


function deleteList(){
  ulEl = document.getElementById('results');

  while(ulEl.firstChild){
    ulEl.removeChild(ulEl.firstChild);
}
}






 // function literal
// var widget = {
//   name:'widget',
//   path:'img/widget.jpg',
//   tally:0,
//   views:0,
//   perctClick: function(){} // return the percentage of clicks vs viwes.
// }

//long way all name and path  can be in a seperate array
// var boots=new Product('boots','./img/boots.jpg');
// var chair=new Product('chair','./img/chair.jpg');
// var water_can=new Product('water_can','./img/water_can.jpg');
// var wine_glass=new Product('wine_glass','./img/wine_glass.jpg');
