const botonNo = document.querySelector(".no");
const botonSi = document.querySelector(".yes");
const box = document.querySelector(".box");

botonNo.addEventListener("mouseover", mover);
botonNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    mover();
});
botonNo.addEventListener("click", mover);


function mover() {

    botonNo.style.position = "fixed";

    const maxX = window.innerWidth - botonNo.offsetWidth;
    const maxY = window.innerHeight - botonNo.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    botonNo.style.left = randomX + "px";
    botonNo.style.top = randomY + "px";
}
botonSi.addEventListener("click", () => {
    botonSi.style.display = "none";
    botonNo.style.display = "none";

    const mensaje = document.createElement("h2");
    mensaje.textContent = "💘 Oficialmente eres mi San Valentín 💘";
    box.appendChild(mensaje);

    // Generar muchos corazones
    for(let i = 0; i < 30; i++){
        setTimeout(crearCorazon, i * 100);
    }
});

function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight - 50 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}


