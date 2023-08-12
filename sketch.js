var gameState="start"


function preload(){
  bg=loadImage("bg.jpg")
  lockImg=loadImage("lock.png")
  nextImg=loadImage("next.png")
  livingAreaImg=loadImage("living room.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  
  lock=createSprite(910,530)
  lock.addImage(lockImg)
  lock.scale=0.3

}
function draw(){
  
  if(gameState==="start"){
    background(bg)

    text(mouseX+","+mouseY,mouseX,mouseY)


    //help 1
    push()
    textSize(50)
    fill("black")
    stroke("yellow")
    strokeWeight(3)
    textAlign(CENTER)
    text("CLICK ON THE LOCK TO ENTER THE ESCAPE ROOM.",width/2,50)
    textSize(40)
    fill("black")
    stroke("red")
    text("GOOD LUCK !! YOU WILL NEED IT.",width/2,height-50)
    pop()


    //help 2
    if(mousePressedOver(lock)){
      gameState="intro1"
    }
    
  }

  if(gameState==="intro1"){
    background("teal")
    lock.visible=false

    //create text for introducing rules of the game using separate text commands
    //refer to help 1 comment above


    //create a next button and change to "livingArea" gamestate when you click it
    //load the image and create a sprite for it, make it vible only where required, line 46 for reference
    //refer to help 2 comment above


  }

  if(gameState==="livingArea"){
    background(livingAreaImg)
    lock.visible=false
  }


  drawSprites()
}