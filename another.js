var cvs=document.getElementById("mycanvas");
var ctx=cvs.getContext("2d");
var snakeH=10;
var snakeW=10;
var dir="right"
var score=0;
var myvar;
function drawSnake(x,y){
    ctx.fillStyle="white"
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black"
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);


}
//drawSnake(0,0);
document.addEventListener("keydown",dirControl);
var len=4;
var snake=[]
for(var i=len-1;i>=0;i--){
    snake.push({
        x:i,
        y:0
    })
}
function dirControl(e){
    if(e.keyCode==37 && dir!="right"){
        dir="left";
    }
    else if(e.keyCode==38 && dir!="down"){
        dir="up";
    }
    else if(e.keyCode==39 && dir!="left"){
        dir="right";
    }
    else if(e.keyCode==40 && dir!="up"){
        dir="down";
    }
}
//food coordinates here
foodX=Math.round(Math.random()*(cvs.width/snakeW)+1);
foodY=Math.round(Math.random()*(cvs.height/snakeH)+1);
    if(foodX>=50 || foodY>=50){
        if(foodX>=50){
            foodX=foodX-2;
        }
        else if(foodY>=50){
            foodY=foodY-2;
        }
    }
var food={
    x:foodX,
    y:foodY


}
function drawFood(x,y){
    ctx.fillStyle="red";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
}
function draw(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    
    for(var i=0;i<snake.length;i++)
    {
        X=snake[i].x;
        Y=snake[i].y;
        drawSnake(X,Y);
    }
    var snakeX=snake[0].x;
    var snakeY=snake[0].y;
    drawFood(food.x,food.y);
    
    
    if(dir=="right"){
        snakeX++;
    }
    else if(dir=="left"){
        snakeX--;

    }
    else if(dir=="up"){
        snakeY--;

    }
    else if(dir=="down"){
        snakeY++;

    }
var newHead={
    x:snakeX,
    y:snakeY
}
if(snakeX==food.x &&snakeY==food.y){
    score+=10;
    document.getElementById("mypara").innerHTML="Score : "+score;
    snake.unshift(newHead);

    foodX=Math.round(Math.random()*(cvs.width/snakeW)+1);
foodY=Math.round(Math.random()*(cvs.height/snakeH)+1);
for(var i=0;i<snake.length;i++)
    {
        if(foodX==snake[i].x && foodY==snake[i].y)
        {
            foodX=foodX-4;
            foodY=foodY-4;
        }
    }
    if(foodX>=50 || foodY>=50){
        if(foodX>=50){
            foodX=foodX-2;
        }
        else if(foodY>=50){
            foodY=foodY-2;
        }
    }
    for(var i=0;i<snake.length;i++)
    {
        if(foodX==snake[i].x && foodY==snake[i].y)
        {
            foodX=foodX-4;
            foodY=foodY-4;
        }
    }
    food={
        x:foodX,
        y:foodY
    }

    drawFood(food.x,food.y);
}
else{
    snake.pop();
    snake.unshift(newHead);
}
if(snakeX<0||snakeY<0||snakeX>=cvs.width/snakeW||snakeY>=cvs.height/snakeH)
    {   
               clearInterval(myvar);
               ctx.font="30px Arial";
               
               ctx.fillStyle="Red";
               ctx.fillText("Game Over !",150,250);

    }
for(var i=snake.length-1;i>0;i--){
    if(snake[0].x==snake[i].x && snake[0].y==snake[i].y)
    {   
        clearInterval(myvar);
        ctx.font="30px Arial";
        ctx.fillStyle="Red";
        ctx.fillText("Game Over !",150,250);
    }
}


}
myvar=setInterval(draw,100)