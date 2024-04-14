import p5 from "p5";
import { State } from "../state";

export function drawSteps(
  s: p5,
  initialX: number,
  initialY: number,
  state: State,
  unitSize: number,
) {
  s.push();
  s.translate(initialX, initialY);
  s.stroke(0, 0, 255);
  s.strokeWeight(6);
  s.rectMode("center");

  let x = 0;
  let y = 0;
  for (const step of state.getResults()) {
    s.translate(x, y);
    x = step.outcome.x * unitSize;
    y = -step.outcome.y * unitSize;
    s.line(0, 0, x, y);
  }
  if (state.getStepsTaken() == 10) {
    s.fill(255, 0, 0);
    s.stroke(245, 230, 66);
    s.circle(x, y, 20);
  }
  s.pop();
}
