function handleLogin() {
    const password = document.getElementById('password').value;

    if (password === 'key_free_baluat') {
        window.location.href = 'https://n191-hash.github.io/config-dow/'; // Thay đổi link trang web A
    } else if (password === 'key_xyz_bluat9812_2025') {
        window.location.href = 'https://web-b.com'; // Thay đổi link trang web B
    } else {
        alert('Mật khẩu không chính xác!');
    }
}

// Hiệu ứng tuyết rơi
const snowContainer = document.getElementById("snow");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowContainer.appendChild(snowflake);

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.animationDelay = Math.random() * 5 + "s";

    setTimeout(() => snowflake.remove(), 5000); // Xóa tuyết sau khi rơi hết
}

setInterval(createSnowflake, 200);
