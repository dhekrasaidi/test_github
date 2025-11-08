
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


const W = canvas.width;
const H = canvas.height;


let playerY = H - 60;  
let jump = false;      
let jumpHeight = 0;  

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

 
  ctx.fillStyle = "black";
  ctx.fillRect(50, playerY, 30, 40);

  requestAnimationFrame(game); 
}


document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && playerY >= H - 60) {
    jump = true;
  }
});


game();
