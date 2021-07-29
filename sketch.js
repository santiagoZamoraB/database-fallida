var ball;
var ballPosition;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    console.log(database);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPosition = database.ref('ball/Position');
    //console.log(ballPosition);
    ballPosition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
  data.ref('ball/Position').set({
      'x': position.x + x,
      'y': position.y + y
  })
}
function readPosition(data){
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;
}