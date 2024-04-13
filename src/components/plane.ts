import p5 from "p5";

export function drawPlane(
  s: p5,
  x: number,
  y: number,
  unitSize: number,
  maxPositiveAxis: number,
) {
  s.push();
  s.translate(x, y);
  s.stroke(0, 0, 0, 10);

  for (let i = 0; i < maxPositiveAxis * 2; i++) {
    for (let j = 0; j < maxPositiveAxis * 2; j++) {
      // horizontal lines
      s.line(
        0,
        j * unitSize,
        unitSize * (maxPositiveAxis * 2 - 1),
        j * unitSize,
      );

      // vertical lines
      s.line(
        i * unitSize,
        0,
        i * unitSize,
        unitSize * (maxPositiveAxis * 2 - 1),
      );
    }
  }

  s.stroke(0, 0, 0, 255);
  // horizontal middle line
  s.line(
    0,
    unitSize * maxPositiveAxis,
    unitSize * (maxPositiveAxis * 2 - 1),
    unitSize * maxPositiveAxis,
  );

  // vertical middle line
  s.line(
    unitSize * maxPositiveAxis,
    0,
    unitSize * maxPositiveAxis,
    unitSize * (maxPositiveAxis * 2 - 1),
  );

  s.pop();
}
