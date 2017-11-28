'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 1;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';

  ctx.fillRect(100, 10, 420, 270);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = -1;
  var startX = 150;
  var startY = 240;
  var step = 50;
  var barWidth = 40;
  var barHeight = 150;
  var baseline = 15;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  var coeffHeight = -barHeight / (maxTime);

  for (var j = 0; j < times.length; j++) {
    if (names[j] !== 'Вы') {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (0.5 + 0.1 * j) + ')';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(startX + (barWidth + step) * j, startY, barWidth, times[j] * coeffHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[j], startX + (barWidth + step) * j, startY + (baseline + 5));
    ctx.fillText(parseInt(times[j], 10), startX + (barWidth + step) * j, startY + (times[j] * coeffHeight) - baseline);
  }
};
