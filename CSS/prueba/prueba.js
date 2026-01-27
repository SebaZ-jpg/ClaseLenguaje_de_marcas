const inputnombre = document.getElementById("nombre");
const botonSaludar = document.getElementById("saludar");
const botonColor = document.getElementById("cambiarColor");
const resultado = document.getElementById("resultado");
const contenedor = document.getElementById("contenedor");

let colorActivo = false;

botonSaludar.addEventListener("click", function(){

    const nombre = inputnombre.value.trim();

    if(nombre === ""){
        resultado.innerText="Por favoor, introduce un nombre";
        }else{
            resultado.innerText = `Hola ${nombre}, Bienvenido`;
        }
            
    });

    botonColor.addEventListener("click", function() {

        if(colorActivo){
            contenedor.style.background = "white"
            resultado.innerText = "Color original restaurado"

        }else {
            contenedor.style.background = "#CCD1C2"
            resultado.innerText = "Color de fondo cambiado"
        }
        colorActivo = ! colorActivo

        });