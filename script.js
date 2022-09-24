document.getElementById("copyid").style.display = "none";
document.querySelector(".texto-resultado").style.display = "none";

var botaoCriptografa = document.getElementById("criptografar");
var botaoDescriptografa = document.getElementById("descriptografar");
var botaoCopia = document.querySelector(".copy-button");

var inputTexto = document.querySelector(".input-texto");
var outputTexto = document.querySelector(".texto-resultado");

function criptografar() {
    var textoInput = inputTexto.value;
    if (inputTexto.value != "") {
        copyid.style.display = "inline";
        textoInput = textoInput.replace(/e/g, "enter")
        textoInput = textoInput.replace(/i/g, "imes");
        textoInput = textoInput.replace(/a/g, "ai");
        textoInput = textoInput.replace(/o/g, "ober");
        textoInput = textoInput.replace(/u/g, "ufat");
        outputTexto.value = textoInput;
        document.querySelector(".img-output").style.display = "none";
        document.querySelector(".titulo-resultado").style.display = "none";
        document.querySelector(".paragrafo-resultado").style.display = "none";



        document.querySelector(".texto-resultado").innerHTML = textoInput;
        document.querySelector(".texto-resultado").style.display = "block";
        addFundoTexto();
    }
}

function descriptografar() {
    var textoInput = inputTexto.value;
    if (inputTexto.value != "") {
        copyid.style.display = "inline";
        textoInput = textoInput.replace(/enter/g, "e")
        textoInput = textoInput.replace(/imes/g, "i");
        textoInput = textoInput.replace(/ai/g, "a");
        textoInput = textoInput.replace(/ober/g, "o");
        textoInput = textoInput.replace(/ufat/g, "u");
        outputTexto.value = textoInput;
        document.querySelector(".img-output").style.display = "none";
        document.querySelector(".titulo-resultado").style.display = "none";
        document.querySelector(".paragrafo-resultado").style.display = "none";
        document.querySelector(".texto-resultado").innerHTML = textoInput;
        document.querySelector(".texto-resultado").style.display = "block";
        addFundoTexto();
    }
}

function copiar() {
    var text = document.querySelector(".input-texto");
    var textContent = document.querySelector(".texto-resultado").innerHTML;

    navigator.clipboard.writeText(textContent);

    text.value = "";

    setTimeout(function () {
        location.reload();
    }, 800);
}

function addFundoTexto() {

    if (window.innerWidth <= 1080) {
        document.querySelector(".right-container").style.background = "none";
        document.querySelector(".right-container").style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";

        document.querySelector(".texto-resultado").style.boxShadow = "none";
        document.querySelector(".texto-resultado").style.boxShadow = "0px 24px 32px -8px rgba(0, 0, 0, 0.08)";

        document.querySelector(".texto-resultado").style.height = "6vh";
        document.querySelector(".texto-resultado").style.height = (90 + (document.querySelector(".texto-resultado")).scrollHeight) + "px";
        document.querySelector(".copy-button").style.top = ((80 + (document.querySelector(".texto-resultado")).scrollHeight) - 130) + "px";
        document.querySelector(".texto-resultado").style.height = "6vh";
        document.querySelector(".texto-resultado").style.height = (100 + (document.querySelector(".texto-resultado")).scrollHeight) + "px";
        document.querySelector(".copy-button").style.top = ((80 + (document.querySelector(".texto-resultado")).scrollHeight) - 130) + "px";
        document.querySelector(".copy-button").style.display = "inline";
    }

    if (window.innerWidth > 1080) {
        document.querySelector(".texto-resultado").style.height = "72vh";
        document.querySelector(".texto-resultado").style.height = (20 + (document.querySelector(".texto-resultado")).scrollHeight) + "px";
        document.querySelector(".texto-resultado").style.height = "72vh";
        document.querySelector(".texto-resultado").style.height = (20 + (document.querySelector(".texto-resultado")).scrollHeight) + "px";
    }
}


botaoCriptografa.addEventListener("click", criptografar);
botaoDescriptografa.addEventListener("click", descriptografar);
botaoCopia.addEventListener("click", copiar);





