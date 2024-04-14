import p5 from "p5";
import { drawPlane } from "./components/plane";
import { drawTable } from "./components/table";
import { Simulation } from "./simulation";

// @ts-ignore
window.p5 = p5;
// @ts-ignore
const s: p5 = window;

let simulation: Simulation;

s.setup = () => {
  let numberOfSimulations = Number.parseInt(
    prompt("Número de simulaciones:") ?? "1",
  );

  s.createCanvas(1400, 1080);
  s.noLoop();

  simulation = new Simulation(s, numberOfSimulations);
  simulation.start();
};

s.draw = () => {
  s.background(255, 255, 255);

  drawPlane(s, 100, 100, 40, 11);

  const table: any[][] = [["x", "y"]];
  for (const step of simulation.getCurrentState().getSteps()) {
    table.push([step.x, step.y]);
  }

  drawTable(s, 1000, 100, 150, 38, table);
};
