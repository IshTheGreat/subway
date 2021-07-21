var user, user_running, edges;
var trackImage;
var track; 
var inviborderRight, inviborderLeft;


function preload(){
  user_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  trackImage = loadImage("path.png")
} 

function setup(){
  createCanvas(400,400);
  //track sprite and image
  track = createSprite(200,180,400,20)
  track.addImage(trackImage)
  
  //user sprite and animation
  user = createSprite(200,150,10,10)
  user.addAnimation("running", user_running)

  //invisible borders
  inviborderLeft = createSprite(20,200,10,400)
  inviborderLeft.visible = false
  inviborderRight = createSprite(380,200,10,400)
  inviborderRight.visible = false 

  
} 


function draw(){
  //set background color 
  background("white");
  drawSprites();
  
  //infinite track
  if(track.y < 0) {
    track.y = track.height/2
  }

  //if touch border statement

  if(user.collide(inviborderRight)) {
    reset()
  }

  if(user.collide(inviborderLeft)) {
    reset()
  }
  
  //mouse control over user
  user.x = World.mouseX
}

function reset() {
  user.destroy()
}