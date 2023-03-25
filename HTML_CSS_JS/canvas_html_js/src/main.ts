import { Circle } from "./circle";

const animatePlayBtn = document.querySelector<HTMLButtonElement>('.animate-play-btn')!;
const animateStopBtn = document.querySelector<HTMLButtonElement>('.animate-stop-btn')!;
const genBtn = document.querySelector<HTMLButtonElement>('.gen-btn')!;
const clearBtn = document.querySelector<HTMLButtonElement>('.clear-btn')!;
const canvas = document.querySelector('#my-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const centerCoordX = canvas.width / 2;
const centerCoordY = canvas.height / 2;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function drawCircle(xCoord: number, yCoord: number, radius: number, color: string) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(xCoord, yCoord, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function generateRandomColors(): string {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function generateRandomBalls() {
  for (let i = 0; i < 10; i++) {
    let xCoord = Math.random() * canvas.width;
    let yCoord = Math.random() * canvas.height;
    let radius = (Math.random() * 10) + 5;
    let color = generateRandomColors();
    let dx = Math.random() * 1.2;
    let dy = Math.random() * 1.2;
    drawCircle(xCoord, yCoord, radius, color);
    circleObjs.push(new Circle(xCoord, yCoord, radius, color, dx, dy, canvas, ctx));
  }
}

//----------------------------------------------------------------->>

let circleObjs: Circle[] = [];
let isAnimating = false;
let animationID: number;

function generateRandomCircleObjs() {
  for (let i = 0; i < 150; i++) {
    let xCoord = Math.random() * canvas.width;
    let yCoord = Math.random() * canvas.height;
    let radius = (Math.random() * 10) + 5;
    let color = generateRandomColors();
    let dx = Math.random() * 1.2;
    let dy = Math.random() * 1.2;
    circleObjs.push(new Circle(xCoord, yCoord, radius, color, dx, dy, canvas, ctx));
  }
}

function clearCircleObjs() {
  circleObjs = [];
}

function animate(): void {
  animationID = requestAnimationFrame(animate);
  clearCanvas();
  for (let i = 0; i < circleObjs.length; i++) {
    circleObjs[i].drawCircle();
    circleObjs[i].update();
  }
}

//----------------------------------------------------------------->> Event listeners

animatePlayBtn.addEventListener('click', () => {
  if (circleObjs.length == 0) {
    generateRandomCircleObjs();
  }
  if (!isAnimating) {
    animate();
    isAnimating = true;
  }
});

animateStopBtn.addEventListener('click', () => {
  if (isAnimating) {
    cancelAnimationFrame(animationID);
    isAnimating = false;
  }
});

genBtn.addEventListener('click', generateRandomBalls);
clearBtn.addEventListener('click', () => {
  clearCanvas();
  clearCircleObjs();
});

export { }