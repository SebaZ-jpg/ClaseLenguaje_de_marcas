const btnFiltrar = document.getElementById("filtrar");
const btnFav = document.getElementById("favoritos");
const select = document.getElementById("categoria");
const contenedoProducto = document.getElementById("productos");
const contador = document.getElementById("contador");

let totalFavoritos = 0;
let mostrarFavs = false;

fetch("ejercicio4.xml")
    .then((response) => response.text())
    .then((data) =>{

        const parser = new DOMparser();
        const xml = parser.parseFromString(data, "text/xml");
        const productos = xml.getElementByTagName("productos");

        for(let producto of productos){
            const nombre = productos.getElementByTagName("nombre")[0].textcontent;
            const categoria = producto.getElementByTagName("categoria")[0].textcontent;

            contenedorProductos.innerHTML +=`

            <dic data-product
                data-category="${categoria}"
                data-fa="false">

                    <p>${nombre}</p>
                    button class="fav">Añadir a favoritos</button>

                    </div>
                    `;
        }
    });