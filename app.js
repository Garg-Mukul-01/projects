let hitCount = 0;
let isGameStart = false;
let second = 30;
let width = window.screen.availWidth;
let height = window.screen.availHeight;
let mosquito = document.getElementById("mosquito");
let hits = document.getElementById("heading-section");
hits.style.display = "none";
document.getElementById("Start-btn").innerText = "Start Game";
document.getElementById("mosquito").style.display = "none";
function startGame() {
  alert("!! Game Start !!");
  isGameStart = true;
  if (isGameStart == true) {
    document.getElementById("Start-btn").style.display = "none";
    document.getElementById("show-first").style.display = "none";
    document.getElementById("mosquito").style.display = "initial";
  }
  hits.style.display = "none";
  const time = setInterval(() => {
   let i = Math.floor(Math.random() * (width*0.55))+0.6;
    let j = Math.floor(Math.random() * (height*0.55));
    mosquito.style.left = i + "px";
    mosquito.style.top = j + "px";
    mosquito.src = "./01.png";
  }, 1300);
  let timer = setInterval(() => {
    second--;
    document.getElementById("timer").innerText = second + " Seconds left";
    if (second === 0) {
      document.getElementById("timer").innerText = " !! Time Out !!";
    }
  }, 1000);
  setTimeout(() => {
    clearInterval(time);
    isGameStart = false;
    hitCount = 0;
    second = 30;
    alert(" !! Game Over !!");
    clearInterval(timer);
    document.getElementById("timer").innerText = "";
    document.getElementById("mosquito").style.display = "none";
    document.getElementById("Start-btn").style.display = "initial";
    document.getElementById("Start-btn").innerText = "Play Again";
    hits.style.display = "initial";
  }, 31000);
}
function hitMosq() {
  if (isGameStart) {
    hitCount++;
    document.getElementById("totalHits").innerText = hitCount;
    mosquito.src = "./02.png";
  }
}
