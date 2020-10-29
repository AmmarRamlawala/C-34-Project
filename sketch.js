//Create variables here
var  dog, happyDog, database, food, foodStock,dogIMG;
function preload(){

  //load images here
dogIMG = loadImage("dogImg.png");
happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
dog.addImage("dog",dogIMG);
foodStock = database.ref('food');
foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
writeStock(food);
dog.addImage(happyDog)
readStock();

}


text("Note: Press UP arrow to feed dog",400,200);
fill("green");
drawSprites();
  //add styles here

}

function readStock(data){
  food=data.val()
}
function writeStock(x){
  if(x<=0){
x=0
  }
  else{
    x=x-1;
  }
database.red('/ ').update({Food:x})
}


