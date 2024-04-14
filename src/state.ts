const outcomes = [
  [0, 1],
  [0, -1],
  [1, 0],
  [0, -1],
];

export class State {
  private randomNumbers: number[] = [];
  private steps: { x: number; y: number }[] = [];
  private stepsTaken = 0;

  nextStep = () => {
    const n = Math.random();
    this.randomNumbers.push(n);
    const index = Math.floor(n / 0.25);
    const outcome = outcomes[index];
    const lastStep = this.steps[this.steps.length - 1] ?? { x: 0, y: 0 };
    this.steps.push({ x: lastStep.x + outcome[0], y: lastStep.y + outcome[1] });
    this.stepsTaken += 1;
  };

  getSteps = () => this.steps;

  getStepsTaken = () => this.stepsTaken;

  getRandomNumbers = () => this.randomNumbers;

  didStayWithin2Blocks = (): boolean => {
    const lastStep = this.steps[this.steps.length - 1];
    return Math.abs(lastStep.x) + Math.abs(lastStep.y) == 2;
  };
}
