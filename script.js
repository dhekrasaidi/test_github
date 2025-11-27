const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//responsive design
function resizeCanvas() {
    const ratio = 800 / 300; // ratio de ton canvas original
    let width = Math.min(window.innerWidth * 0.95, 800); // max 800px pour PC
    let height = width / ratio;
    canvas.width = width;
    canvas.height = height;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();


//les variables 
let speedIncrease = 0.002;//vitesse progressive

let playerY = canvas.height - 60;  //position verticale du joueur
let jump = false;      
let jumpHeight = 0;  

let score = 0;
let bestScore = localStorage.getItem("bestScore") 
  ? parseInt(localStorage.getItem("bestScore")) 
  : 0;


//OBSTACLES
let obstacles = [
  { x: canvas.width, width: 40, height: 50, speed: 3 },
  { x: canvas.width+ 300, width: 40, height: 50, speed: 3 },
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


//loop du jeu
function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);//clear canvas 

//sol
  ctx.fillStyle = "green";
  ctx.fillRect(0, canvas.height- 20, canvas.width, 20);

//saut du joueur
  if (jump) {
    jumpHeight++;
    playerY -= 7; // ralentit la montée
    if (jumpHeight > 18) jump = false;// saut un peu plus long
  } else if (playerY < canvas.height - 60) {
    playerY += 3; // ralentit la descente
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
        canvas.height- 20 - ob.height + 10,
        ob.width,
        ob.height
    );

    ob.speed += speedIncrease;
    ob.x -= ob.speed;
    if (ob.x + ob.width < 0) {
    ob.x =canvas.width+ Math.random() * 300;

   
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
        y: canvas.height- 20 - ob.height + 10 + 5,
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
    obstacles.forEach(ob => ob.speed = 3); // remettre la vitesse de base

    obstacles.forEach((ob, i) => ob.x =canvas.width+ i * 300);
}


  requestAnimationFrame(game); 
}


document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && playerY >= canvas.height- 60) {
    jump = true;
  }
});

//jeu commence quand les images sont chargées
PlayerRun.onload = PlayerJump.onload = () => {
  game(); 
};

