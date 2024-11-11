function obtenerArregloUsuario() {
    const input = document.getElementById("user-input").value;
    return input.split(",").map(Number);
}

function crearArregloVisual(arr) {
    const container = document.getElementById("array-container");
    container.innerHTML = '';
    arr.forEach(num => {
        const element = document.createElement("div");
        element.classList.add("array-element");
        element.textContent = num;
        container.appendChild(element);
    });
}

function actualizarArregloVisual(arr) {
    const elements = document.querySelectorAll(".array-element");
    arr.forEach((num, index) => {
        elements[index].textContent = num;
    });
}

async function iniciarOrdenamiento() {
    const arr = obtenerArregloUsuario();
    if (arr.some(isNaN)) {
        alert("Por favor, ingresa solo números separados por comas.");
        return;
    }
    crearArregloVisual(arr);
    await meterarreglado(arr);
}

async function meterarreglado(arr) {
    const l = arr.length;
    let j, temporal;

    for (let i = 1; i < l; i++) {
        j = i;
        temporal = arr[i];
        while (j > 0 && arr[j - 1] > temporal) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temporal;
        actualizarArregloVisual(arr);
        console.log(`Paso ${i}: ${arr}`);
        await new Promise(resolve => setTimeout(resolve, 500)); // Pausa de 500ms
    }
}
