document.getElementById("loginButton").addEventListener("click", function () {
  const password = document.getElementById("password").value;

  if (password === "key_free_baluat") {
    window.location.href = "https://example.com/trang1";
  } else if (password === "key_xyz_bluat9812_2025") {
    window.location.href = "https://example.com/trang2";
  } else {
    alert("Sai mật khẩu!");
  }
});

// Hiệu ứng tuyết rơi
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.id = "snow";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";

  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let snowflakes = [];

  function createSnowflake() {
    snowflakes.push({
      x: Math.random() * width,
      y: 0,
      radius: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5
    });
  }

  function drawSnowflakes() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let flake of snowflakes) {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    }
    ctx.fill();
    moveSnowflakes();
  }

  function moveSnowflakes() {
    for (let flake of snowflakes) {
      flake.y += flake.speed;
      if (flake.y > height) {
        flake.y = 0;
        flake.x = Math.random() * width;
      }
    }
  }

  function update() {
    drawSnowflakes();
    requestAnimationFrame(update);
  }

  setInterval(createSnowflake, 100);
  update();

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
});
