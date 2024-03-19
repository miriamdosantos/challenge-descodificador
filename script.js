

const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value)
    mensagem.value= textEncriptado
    textArea= ""
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
function btnDesencriptar(stringDesencriptada){
    const textDesencriptado = desencriptar(textArea.value)
    mensagem.value= textDesencriptado
    textArea= ""
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarMensagem(mensagem){
    const copiarMensagem = mensagem.value;
    return copiarMensagem;
}
function copiarMensagem() {
    var mensagem = document.getElementById('mensagem');
    mensagem.select();
    document.execCommand('copy');
    alert('Mensagem copiada!');
}