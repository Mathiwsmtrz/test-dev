function init() {
  let mouse = {
    click: false,
    move: false,
    pos: {
      x: 0,
      y: 0,
    },
    pos_prev: false,
  };

  const color = getRandomColor();

  const canvas = document.getElementById('drawing');
  const context = canvas.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const socket = io();

  canvas.addEventListener('mousedown', (e) => {
    mouse.click = true;
  });
  canvas.addEventListener('mouseup', (e) => {
    mouse.click = false;
  });
  canvas.addEventListener('mousemove', (e) => {
    mouse.move = true;
    mouse.pos.x = e.clientX / width;
    mouse.pos.y = e.clientY / height;
  });

  socket.on('set_draw_line', data=>{
    const line = data.line;
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = data.color;
    context.moveTo(line[0].x*width, line[0].y*height);
    context.lineTo(line[1].x*width, line[1].y*height);
    context.stroke();
  });

  function mainLoop() {
    if (mouse.click && mouse.move && mouse.pos_prev) {
      socket.emit('draw_line', {
        line: [mouse.pos, mouse.pos_prev],
        color: color
      });
      mouse.move = false;
    }
    mouse.pos_prev = {x: mouse.pos.x, y: mouse.pos.y}
    setTimeout(mainLoop, 25);
  }
  mainLoop();
}
document.addEventListener('DOMContentLoaded', init);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}