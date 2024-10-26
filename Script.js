document.addEventListener("DOMContentLoaded", function () {
    const nickname = localStorage.getItem("nickname");
    if (nickname) {
        document.getElementById("nickname").value = nickname;
        document.getElementById("output").innerText = `Bienvenido, ${nickname}`;
    }
});

function saveNickname() {
    const nickname = document.getElementById("nickname").value;
    if (nickname) {
        localStorage.setItem("nickname", nickname);
        document.getElementById("output").innerText = `Bienvenido, ${nickname}`;
        alert("Nick guardado correctamente");
    } else {
        alert("Por favor, introduce un nick válido.");
    }
}

function showIP() {
    document.getElementById("output").innerText = "astralymc.servermc.xyz";
}

function showInfo() {
    document.getElementById("output").innerHTML = `
        <ul>
            <li>Año de creación: 2024</li>
            <li>Miembros a 26 Oct. 2024: 115</li>
            <li>Servidor en pleno esplendor y crecimiento.</li>
            <li>Tenemos staff 24/7</li>
        </ul>
    `;
}
