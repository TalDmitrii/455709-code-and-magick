'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';

  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(310, 30);
  ctx.lineTo(520, 10);
  ctx.lineTo(490, 145);
  ctx.lineTo(520, 280);
  ctx.lineTo(310, 260);
  ctx.lineTo(100, 280);
  ctx.lineTo(130, 145);
  ctx.lineTo(100, 10);
  ctx.closePath();
  ctx.fill();

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 220, 40);
  ctx.fillText('Список результатов:', 220, 70);

  var maxTime = -1;
  var maxTimeIndex = -1;
  var startX = 150;
  var startY = 300;
  var step = 50;
  var barWidth = 40;
  var barHeight = 150;
  var baseline = 15;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
      maxTimeIndex = i;
    }
  }

  var coeffHeight = -150 / (maxTime);

  ctx.fillText('Худшее время: ' + parseInt(maxTime, 10) + 'мс у игрока '
                + names[maxTimeIndex], 140, 100);

  for (var j = 0; j < times.length; j++) {
    if (names[j] !== 'Вы') {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (0.2 + 0.1 * j) + ')';
    } else {
      ctx.fillStyle = 'rgba(0, 255, 0, 1)';
    }

    ctx.fillRect(startX + (barWidth + step) * j, startY, barWidth, times[j] * coeffHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[j], startX + (barWidth + step) * j, barHeight - baseline);
  }
};
