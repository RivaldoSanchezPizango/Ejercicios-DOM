const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limistBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (limistBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      };
      break;
    case 38:
      if (limistBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limistBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break
    case 40:
      e.preventDefault();
      if (limistBall.bottom < limitsStage.bottom) {
        y++;
      }
      break
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}

export function shortcuts(e) {
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado")
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado")
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un prompt con el teclado")
  }
}