window.onload = function() {
    alert("¡Bienvenido al Encriptador de texto Alura, Por Jose J!");

    // Agrega un listener al botón de copiar
    document.getElementById("copiar").addEventListener("click", copiarAlPortapapeles);
};

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.png";
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar";
        Swal.fire({
            title: 'Error',
            text: 'Debes ingresar algún texto',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Error'
        });
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptar1.png";
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas desencriptar";
        Swal.fire({
            title: 'Error',
            text: 'Debes ingresar algún texto',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Error'
        });
    }
}

function copiarAlPortapapeles() {
    // Obtiene el texto del área de texto
    let texto = document.getElementById("texto").value;

    // Crea un elemento temporal para copiar el texto
    let tempInput = document.createElement("input");
    tempInput.value = texto;
    document.body.appendChild(tempInput);

    // Selecciona el texto y copia al portapapeles
    tempInput.select();
    document.execCommand("copy");

    // Elimina el elemento temporal
    document.body.removeChild(tempInput);

    // Mensaje de confirmación
    Swal.fire({
        title: 'Texto copiado',
        text: 'El texto ha sido copiado al portapapeles',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
