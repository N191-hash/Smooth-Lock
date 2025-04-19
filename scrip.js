// Mật khẩu mẫu
const PASSWORD_A = "key_free_bluat";
const PASSWORD_B = "key_xyz_bluat9812_2025";

function checkPassword() {
  const input = document.getElementById("passwordLogin").value;
  if (input === PASSWORD_A) {
    window.location.href = "https://example.com/a";
  } else if (input === PASSWORD_B) {
    window.location.href = "https://example.com/b";
  } else {
    alert("Sai mật khẩu!");
  }
}

// Hiệu ứng tuyết rơi
const canvas = document.getElementById("snow");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let flakes = [];
  for (let i = 0; i < 100; i++) {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 100
    });
  }

  function drawFlakes() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < flakes.length; i++) {
      let f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  let angle = 0;
  function moveFlakes() {
    angle += 0.01;
    for (let i = 0; i < flakes.length; i++) {
      let f = flakes[i];
      f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
      f.x += Math.sin(angle) * 2;

      if (f.y > height) {
        flakes[i] = { x: Math.random() * width, y: 0, r: f.r, d: f.d };
      }
    }
  }

  setInterval(drawFlakes, 25);
}
