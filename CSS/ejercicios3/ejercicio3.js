const btnCargar = document.getElementById("cargar");
const input = document.getElementById("buscar");
const select = document.getElementById("select");
const resultado = document.getElementById("resultado");

let listaTareas = [];

function mostrarTareas(tareas){

        if(tareas.length === 0){
        resultado.innerHTML=`<p>No hay tareas para mostrar</p>`;
            return;
        }else{

            resultado.innerHTML=`<h2>Numeros tareas: ${tareas. length}</h2>`

            tareas.array.forEach((tarea) => {

            resultado.innerHTML += `
            <div data-task
            data-status="${tarea.estado}"
            data-priority="${tarea.prioridad}">
            <p>${tarea.nombre}</p>
            <button data-id=${tarea.id}>
                Marcar como hecha
            </button>
        <div>
        `;
        });

        const botones = document.querySelectorAll("button[data-id]");

        botones.forEach((boton) => {

            boton.addEventListener("click", function(evento){

                const id = parseInt(evento.target.dataset.id);
                const tarea = listaTareas.find((i) => i.id == id);

                if(tarea){
                    tarea.estado="hecha";
                }
            });
        });

    }
}

function filtrar(){

    const texto = input.value. toLowerCase(). trim()
    const prioridad = select.value. toLowerCase()

    const tareasFiltradas = listaTareas.filter((i) => {

    const coincidenciaTexto = i.nombre.toLowerCase().includes(texto);
    const coincidenciaPrioridad = prioridad === "todas" || i.prioridad === prioridad;

    return coincidenciaPrioridad && coincidenciaTexto;
});

    mostrarTareas(tareasFiltradas);

};

btnCargar.addEventListener("click", function(){

    listaTareas = [
    {id: 1, nombre: "Estudiar HTML", prioridad: "alta", estado:"pendiente"},
    {id: 2, nombre: "Practicar CSS", prioridad: "media", estado:"pendiente"},
    {id: 3, nombre: "Apuntes", prioridad:"media", estado:"pendiente"},
    {id: 4, nombre: "Realizar ejercicios", prioridad:"baja", estado:"pendiente"},

    ];

mostrarTareas(listaTareas);

});

input.addEventListener("input", filtrar);
select.addEventListener("change", filtrar);


        I