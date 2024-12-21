let shante = document.getElementById("shante");
let animacion = setInterval(cambiar_imagen,50);
let num_imagen = 0;
let x = 0;
let y = 0;

function obtenerLimites() {
    return {
        anchoVentana: window.innerWidth,
        altoVentana: window.innerHeight,
        anchoShante: shante.offsetWidth,
        altoShante: shante.offsetHeight
    };
}

function cambiar_imagen(){
    num_imagen = num_imagen + 1;
    let direc;
    if (num_imagen > 15){
        num_imagen = 1;
    }
    direc = "img/shante/Shante_"+num_imagen+".png";
    shante.setAttribute("src",direc);
}

document.addEventListener("keydown", mover);
function mover(event){
    console.log(event.keyCode);
    const { anchoVentana, altoVentana, anchoShante, altoShante } = obtenerLimites();
    if (event.keyCode == 68) {
        console.log("Me moveré 5 pixeles a la derecha");
        if (x + 5 + anchoShante <= anchoVentana) { // Evita que se salga por la derecha
            x = x + 5;
        }
    }
    if (event.keyCode == 65) {
        console.log("Me moveré 5 pixeles a la izquierda");
        if (x - 5 >= 0) { // Evita que se salga por la izquierda
            x = x - 5;
        }
    }
    if (event.keyCode == 83) {
        console.log("Me moveré 5 pixeles hacia abajo");
        if (y + 5 + altoShante <= altoVentana) { // Evita que se salga por abajo
            y = y + 5;
        }
    }
    if (event.keyCode == 87) {
        console.log("Me moveré 5 pixeles hacia arriba");
        if (y - 5 >= 0) { // Evita que se salga por arriba
            y = y - 5;
        }
    }
    shante.style.left = x + "px";
    shante.style.top = y + "px";  // Mueve verticalmente
}

console.log("Esta es una modificación");
//shante.setAttribute("src","img/Vidas/heart_1.png");