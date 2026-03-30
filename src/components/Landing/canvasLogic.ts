export default function draw(ctx: CanvasRenderingContext2D, 
  canvas: HTMLCanvasElement) {
  const size = 900;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;

  const scale = window.devicePixelRatio;

  canvas.width = Math.floor(size * scale);
  canvas.height = Math.floor(size * scale);

  ctx.scale(scale, scale);

  const dot1 = new Image();
  dot1.src = "/images/DOT1.png";

  const dot2 = new Image();
  dot2.src = "/images/DOT2.png";

  const dot3 = new Image();
  dot3.src = "/images/DOT3.png";


  let ball1Y = 0,
    ball2Y = 0,
    ball3Y = 0;
  //速度
  let ball1V = 0.0,
    ball2V = 0.0,
    ball3V = 0.0;
  //反発係数
  const ball1E = -0.85,
    ball2E = -0.9,
    ball3E = -0.8;

  const ballG = 2000;  //重力加速度
  //const ballT = 0.15;  //時間

  let lastTime: number | null = null;

  function createAnimation(timestamp: number) {
    if(!lastTime) lastTime = timestamp;
    const delta = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(dot1, 250, ball1Y, 100, 100);
    ctx.drawImage(dot2, 700, ball2Y, 40, 40);
    ctx.drawImage(dot3, 780, ball3Y, 60, 60);

    // ball1V += ballG * ballT;
    // ball1Y += ball1V * ballT;
    // if (ball1Y > canvas.height - 100) {
    //   ball1Y = canvas.height - 100;
    //   ball1V *= ball1E;
    // }

    // ball2V += ballG * ballT;
    // ball2Y += ball2V * ballT;
    // if (ball2Y > canvas.height - 40) {
    //   ball2Y = canvas.height - 40;
    //   ball2V *= ball2E;
    // }

    // ball3V += ballG * ballT;
    // ball3Y += ball3V * ballT;
    // if (ball3Y > canvas.height - 60) {
    //   ball3Y = canvas.height - 60;
    //   ball3V *= ball3E;
    // }

    ball1V += ballG * delta;
    ball1Y += ball1V * delta;
    if (ball1Y > size - 100) {
      ball1Y = size - 100;
      ball1V *= ball1E;
    }

    ball2V += ballG * delta;
    ball2Y += ball2V * delta;
    if (ball2Y > size - 40) {
      ball2Y = size - 40;
      ball2V *= ball2E;
    }

    ball3V += ballG * delta;
    ball3Y += ball3V * delta;
    if (ball3Y > size - 60) {
      ball3Y = size - 60;
      ball3V *= ball3E;
    }

    requestAnimationFrame(createAnimation);
  }
  
  requestAnimationFrame(createAnimation);
}