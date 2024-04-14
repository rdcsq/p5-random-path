import p5 from "p5";
import { State } from "./state";

export class Simulation {
  private statesList: State[] = [];
  private currentStateIndex = 0;

  constructor(
    private s: p5,
    private numberOfSimulations: number,
  ) {
    for (let i = 0; i < this.numberOfSimulations; i++) {
      this.statesList.push(new State());
    }
  }

  private runGame = async (state: State) => {
    while (state.getStepsTaken() < 10) {
      state.nextStep();
      this.s.redraw();
      await new Promise((r) => setTimeout(r, 200));
    }
  };

  getCurrentState = () => this.statesList[this.currentStateIndex];

  start = async () => {
    if (this.currentStateIndex == this.statesList.length) return;

    const currentState = this.getCurrentState();
    await this.runGame(currentState);
    const table: {
      cuadrasRecorridas: number;
      numeroAleatorio: number;
      localizacion: string;
      exito: boolean;
    }[] = [];

    for (let i = 0; i < currentState.getStepsTaken(); i++) {
      table.push({
        cuadrasRecorridas: i + 1,
        numeroAleatorio: currentState.getRandomNumbers()[i],
        localizacion: `(${currentState.getSteps()[i].x}, ${currentState.getSteps()[i].y})`,
        exito: false,
      });
    }
    table[table.length - 1].exito = currentState.didStayWithin2Blocks();
    console.table(table);

    this.currentStateIndex += 1;
    this.start();
  };
}
