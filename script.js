const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


const W = canvas.width;
const H = canvas.height;


let playerY = H - 60;  
let jump = false;      
let jumpHeight = 0;  

let score = 0;
let bestScore = 0;


let obstacleX = W;
let obstacleWidth = 40;
let obstacleHeight = 50;
let obstacleSpeed = 3;

let obstacleImg = new Image();
obstacleImg.src = "obstacle.png";



const PlayerRun = new Image ();
PlayerRun.src="Walking-Green-Pants.png"

const PlayerJump = new Image ();
PlayerJump.src="Jumping-Green-Pants.png"



function game() {
  ctx.clearRect(0, 0, W, H); 


  ctx.fillStyle = "green";
  ctx.fillRect(0, H - 20, W, 20);


  if (jump) {
    jumpHeight++;
    playerY -= 10; 
    if (jumpHeight > 15) jump = false;
  } else if (playerY < H - 60) {
    playerY += 10; 
    jumpHeight = 0;
  }

 
 if (jump){
  ctx.drawImage(PlayerJump,50,playerY,50,50);
 }else{
  ctx.drawImage(PlayerRun,50,playerY,50,50);

 }
 
 //obstacle
let offsetY = 10; 
ctx.drawImage(obstacleImg, obstacleX, H - 20 - obstacleHeight + offsetY, obstacleWidth, obstacleHeight);

obstacleX -= obstacleSpeed;

if (obstacleX + obstacleWidth < 0) {
    obstacleX = W;
}


  score++;
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 25);
  ctx.fillText("Best Score : " + bestScore, 10, 50);
  


  requestAnimationFrame(game); 
}


document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && playerY >= H - 60) {
    jump = true;
  }
});

PlayerRun.onload = PlayerJump.onload = () => {
  game(); 
};

