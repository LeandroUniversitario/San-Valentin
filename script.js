const botonNo = document.querySelector(".no");
const botonSi = document.querySelector(".yes");
const box = document.querySelector(".box");
const musica = document.getElementById("musica");
const foto = document.getElementById("foto");

botonSi.addEventListener("click", () => {

    musica.volume = 1; // 🔥 volumen máximo (va de 0 a 1)
    musica.play();
   // 1. OCULTAR ELEMENTOS ANTIGUOS
    // Es importante ocultar la foto circular y la pregunta para limpiar la caja
    document.getElementById("foto").style.display = "none"; 
    document.querySelector(".box p").style.display = "none"; 

    // 2. CREAR LA NUEVA IMAGEN
    const nuevaFoto = document.createElement("img");
    nuevaFoto.src = "dedo.jpeg";
    
    // ESTILOS RESPONSIVE
    nuevaFoto.style.width = "100%";       
    nuevaFoto.style.maxWidth = "400px";     // Límite de ancho para PC
    nuevaFoto.style.height = "auto";        
    nuevaFoto.style.maxHeight = "60vh";     // CRUCIAL: Que nunca ocupe más del 60% de la altura de la pantalla
    nuevaFoto.style.objectFit = "contain";  // Para que la imagen se vea completa
    nuevaFoto.style.borderRadius = "10px";
    nuevaFoto.style.marginTop = "10px";
    
    // Preparamos la animación
    nuevaFoto.style.transform = "scale(0)"; 
    nuevaFoto.style.transition = "transform 0.5s ease";

    // 3. AGREGAR A LA CAJA (NO AL BODY)
    // Esto asegura que la imagen empuje el texto hacia abajo correctamente
    box.appendChild(nuevaFoto); 

    // Ejecutar animación de entrada
    setTimeout(() => {
        nuevaFoto.style.transform = "scale(1)";
    }, 50);

    // Ocultar botones
    botonSi.style.display = "none";
    botonNo.style.display = "none";

    // Crear mensaje final
    const mensaje = document.createElement("h2");
    mensaje.textContent = "💘 Oficialmente eres mi San Valentín 💘";
    box.appendChild(mensaje);

    // Lluvia de corazones
    for(let i = 0; i < 30; i++){
        setTimeout(crearCorazon, i * 100);
    }
});
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


