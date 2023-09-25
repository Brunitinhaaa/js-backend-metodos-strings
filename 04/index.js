let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

const novoIdentificador = identificador.padStart(6, "0");

const arrayDeNomes = nome.split(" ");

let novoNome = "";
for (let palavra of arrayDeNomes) {
    let primeiraletra = palavra.slice(0, 1);
    let restantedasletras = palavra.slice(1);
    novoNome += primeiraletra.toUpperCase() + restantedasletras + " ";
}

const emailSemEspaco = email.trim();

console.log(novoIdentificador, novoNome, emailSemEspaco);