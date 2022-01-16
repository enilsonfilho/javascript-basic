//let x = "";
//console.log(x);
//x = "oi";

function imprimeTexto(texto) {
    console.log(texto);
}

imprimeTexto("Oi");
imprimeTexto("Outro texto");

// três formas de escrever funções

function soma() {
    let num1 = 4;
    let num2 = 3;
    return num1 + num2;
}

console.log(soma());

imprimeTexto("Printa " + soma());