var car,wall;

var speed,  wheight;

function setup() {
  createCanvas(1600,400);



  car = createSprite(30, 200, 50, 20);
  


  wall = createSprite(1500,200,60,height/2);
  wall.shapecolour=color(230,230,0);

speed = random(55,90)


wheight = random(400,1500)

car.velocityX =speed;



//Deformation = 0.5 * wheight * speed * speed/22500;

if(wall.x - car.x < (car.width + wall.width)/2){

car.velocityX = 0;
var deformation= 0.5 * weight * speed * speed / 22500;

if (deformation > 180){
car.shapecolour= color(255,0,0);
}

if(deformation < 180 && deformation > 100){
  car.shapecolour= color(230,230,0);

}

if(deformation < 100){
car.shapecolour = color(0,255,0)
}

} 

}

function draw() {
  background("black");  
  drawSprites();
}