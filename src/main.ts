import p5 from "p5";
import { drawPlane } from "./components/plane";
import { drawTable } from "./components/table";

// @ts-ignore
window.p5 = p5;
// @ts-ignore
const s: p5 = window;

s.setup = () => {
  s.createCanvas(1400, 1080);
};

s.draw = () => {
  s.background(255, 255, 255);

  drawPlane(s, 100, 100, 40, 11);

  drawTable(s, 1000, 100, 150, 38, [
    ["x", "y"],
    [0, 1],
    [2, 3],
  ]);
};
