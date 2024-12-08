// Cargar el formulario al cargar la página
document.addEventListener('DOMContentLoaded', mostrarFormulario);

// Mostrar el formulario en el HTML
function mostrarFormulario() {
    const formularioDiv = document.getElementById('formularioDiv');

    // Limpiar el contenido actual del formulario en HTML
    formularioDiv.innerHTML = '';


    // Crea un contenedir div para el  formulario
    const contenidoDiv = document.createElement('div');
    contenidoDiv.classList.add('contenido-formulario');


    // Agrega contenido al formulario
    contenidoDiv.innerHTML = `
        <form action="" method="post">
           <p>Ingrese los datos para completar la compra</p>
           <spam style="color:red">Numero de Tarjeta: </span>
           <input type="text" id="numeroTarjeta" name="numeroTarjeta">
           <br>
           <spam>Vencimiento de Tarjeta: </span>
           <input type="text" id="vencTarjeta" name="vencTarjeta">
           <br>
           <spam>Apellido y nombre del titular: </span>
           <input type="text" id="apellidoNombre" name="apellidoNombre">
           <br>
           <br>
           <button onclick="cerrarVentana()">Cancelar</button>
           <button onclick="mostrarDatosPago()">Aceptar</button>
        </form>
    `;

    // Hace un append de contenidoDiv al div de la pagina (formularioDiv)
    formularioDiv.appendChild(contenidoDiv);

    const contenidoDiv1 = document.createElement('div');
    contenidoDiv1.classList.add('contenido-formulario');
    contenidoDiv1.innerHTML = `<p>Hola Lucas</p>`;
    formularioDiv.appendChild(contenidoDiv1);

}

function mostrarDatosPago() {
    const input = document.getElementById('numeroTarjeta');
    const valor = input.value;
    alert(`El numero de tarjeta ingresado es: ${valor}`);
    return
}

function cerrarVentana() {
    window.close();
}

//mostrarFormulario();