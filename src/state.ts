type Coordinates = {
  x: number;
  y: number;
};

const outcomes: Coordinates[] = [
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: -1, y: 0 },
];

export class State {
  private results: { outcome: Coordinates; n: number }[] = [];
  private steps: Coordinates[] = [];
  private stepsTaken = 0;

  nextStep = () => {
    const n = Math.random();
    const index = Math.floor(n / 0.25);
    const outcome = outcomes[index];
    this.results.push({ outcome, n });
    const lastStep = this.steps[this.steps.length - 1] ?? { x: 0, y: 0 };
    this.steps.push({ x: lastStep.x + outcome.x, y: lastStep.y + outcome.y });
    this.stepsTaken += 1;
  };

  getSteps = () => this.steps;

  getStepsTaken = () => this.stepsTaken;

  getResults = () => this.results;

  didStayWithin2Blocks = (): boolean => {
    const lastStep = this.steps[this.steps.length - 1];
    return Math.abs(lastStep.x) + Math.abs(lastStep.y) == 2;
  };
}
