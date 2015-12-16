

var allProducts=[];
var resultTable = document.getElementById('listOfProducts');
var productNames = ['bag','banana','boots','chair','cthulhu','dragon','pen','scissors','shark','unicorn','water_can','wine_glass']

//define constructor instead of object literal
function Product(name, path){
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  allProducts.push(this);  //every product object add to a array this means an object
  // data.labels.push(name);
  // data.dataset[0].push(name);
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
  resultTable : document.getElementById('ListOFProducts'),

  leftEl: document.getElementById('imgOne'),
  middleEl: document.getElementById('imgTwo'),
  rightEl: document.getElementById('imgThree'),
  // barcharts:nul;,
  // buttonClick: document.getElementById('button');
  // ctx:document.getElementById('mychart').getContext("2d");;

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
          //showbutton();
          document.getElementById('button').hidden = false;
          resultTable.hidden = false;
        }
        else {
          document.getElementById('button').hidden = true;
          // resultTable.hidden = true;
          removeTable();
        }
    },
  };


productRank.leftEl.addEventListener('click',function(){

  console.log('This is the old number:'+ productRank.leftObj.tally);
  // Increment the object's tally property and productRank's total clicks by 1
  productRank.leftObj.tally += 1;
  productRank.totalVotes += 1;
  console.log('this id the new number: ' + productRank.midObj.tally);
  productRank.showResults();  // Call the showResults method to check whether there have been 15 clicks
  productRank.displayImages();  // Call the displayImages method to reroll three new images
});

productRank.middleEl.addEventListener('click',function(){
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

//call function
productRank.displayImages();

//a function to create a table for results
function productTable(){
  resultTable.style.border="1px solid black";
  resultTable.hidden = false;
  var thEl1 = document.createElement('th');
  var thEl2 = document.createElement('th');
  var trEl = document.createElement('tr');

  thEl1.textContent="Products";
  trEl.appendChild(thEl1);
  thEl2.textContent="Votes";
  trEl.appendChild(thEl2);
  resultTable.appendChild(trEl);
  for (var i = 0; i < allProducts.length; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allProducts[i].name;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = allProducts[i].tally;
    trEl.appendChild(tdEl);
    resultTable.appendChild(trEl);
  };
}
document.getElementById('button').addEventListener('click',function(event){
  event.preventDefault();
  productTable();
});

function removeTable() {
  while (resultTable.firstChild) {
    resultTable.removeChild(resultTable.firstChild);
  }
}




// tallyClicks:function(elId){
//   for (var i in allProducts) {
//     if(allProducts[i].name===elId){
//       allProducts[i].tally+=1;
//       this.totalVotes+=1;
//
//
//     }
//   }
// }

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
