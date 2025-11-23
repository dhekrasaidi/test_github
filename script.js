const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


const W = canvas.width;
const H = canvas.height;


let playerY = H - 60;  
let jump = false;      
let jumpHeight = 0;  

let score = 0;
let bestScore = localStorage.getItem("bestScore") 
  ? parseInt(localStorage.getItem("bestScore")) 
  : 0;



let obstacles = [
  { x: W, width: 40, height: 50, speed: 3 },
  { x: W + 300, width: 40, height: 50, speed: 3 },
  { x: W + 600, width: 40, height: 50, speed: 3 }
];

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
obstacles.forEach(ob => {
    ctx.drawImage(
        obstacleImg,
        ob.x,
        H - 20 - ob.height + 10,
        ob.width,
        ob.height
    );

    ob.x -= ob.speed;
    if (ob.x + ob.width < 0) {
    ob.x = W + Math.random() * 300;

   
    score++;
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("bestScore", bestScore);
    }
}

});


  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 25);
  ctx.fillText("Best Score : " + bestScore, 10, 50);
  
// collision
let playerHitbox = {
    x: 50 + 10,   
    y: playerY + 5,
    width: 30,
    height: 45
};

let collision = false;

obstacles.forEach(ob => {
    let obstacleHitbox = {
        x: ob.x + 8,
        y: H - 20 - ob.height + 10 + 5,
        width: ob.width - 15,
        height: ob.height - 10
    };

    // Test collision  joueur x obstacle
    if (
        playerHitbox.x < obstacleHitbox.x + obstacleHitbox.width &&
        playerHitbox.x + playerHitbox.width > obstacleHitbox.x &&
        playerHitbox.y < obstacleHitbox.y + obstacleHitbox.height &&
        playerHitbox.y + playerHitbox.height > obstacleHitbox.y
    ) {
        collision = true;
    }
});

if (collision) {
    alert("game over! press Space to REPLAY");
    score = 0;
    obstacles.forEach((ob, i) => ob.x = W + i * 300);
}


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

