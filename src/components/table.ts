import p5 from "p5";

const padding = 8;

export function drawTable(
  s: p5,
  x: number,
  y: number,
  columnWidth: number,
  rowHeight: number,
  data: any[][],
) {
  s.push();
  s.translate(x, y);

  s.textSize(20);

  data.forEach((row) => {
    row.forEach((cell, cellIndex) => {
      s.rect(cellIndex * columnWidth, 0, columnWidth, rowHeight);
      s.text(
        cell,
        padding + cellIndex * columnWidth,
        padding,
        columnWidth - padding * 2,
        rowHeight - padding * 2,
      );
      s.line(columnWidth, 0, columnWidth, rowHeight);
    });

    s.translate(0, rowHeight);
  });

  s.pop();
}
