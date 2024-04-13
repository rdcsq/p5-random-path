import p5 from "p5";
import { drawPlane } from "./components/plane";

// @ts-ignore
window.p5 = p5;
// @ts-ignore
const s: p5 = window;

s.setup = () => {
  s.createCanvas(1920, 1080);
};

s.draw = () => {
  s.background(255, 255, 255);

  drawPlane(s, 100, 100, 40, 11);
};
