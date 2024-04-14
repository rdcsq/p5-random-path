import p5 from "p5";
import { drawPlane } from "./components/plane";
import { drawTable } from "./components/table";
import { Simulation } from "./simulation";
import { drawSteps } from "./components/steps";

// @ts-ignore
window.p5 = p5;
// @ts-ignore
const s: p5 = window;

let simulation: Simulation;

s.setup = () => {
  let numberOfSimulations = Number.parseInt(
    prompt("Número de simulaciones:") ?? "1",
  );

  s.createCanvas(1200, 1080);
  s.noLoop();

  simulation = new Simulation(s, numberOfSimulations);
  simulation.start();
};

s.draw = () => {
  s.background(255, 255, 255);

  drawPlane(s, 100, 100, 40, 11);
  drawSteps(s, 540, 540, simulation.getCurrentState(), 40);

  const table: any[][] = [["x", "y"]];
  for (const step of simulation.getCurrentState().getSteps()) {
    table.push([step.x, step.y]);
  }

  drawTable(s, 1000, 100, 60, 38, table);
};
