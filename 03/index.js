let texto = "Aprenda programar do zero na Cubos Academy";

while (texto !== texto.replace(" ", "-")) {
    //enquanto o texto original for diferente do resultado substituído
    //ou seja, se eu aplicar a substituição eu atualizo o resultado pra algo diferente ou fico com o mesmo resultado?
    texto = texto.replace(" ", "-");
    //salvo esse resultado substituido dentro da prórpia variável
    //ou seja, caso eu tenha um resultado diferente significa que eu fiz a substituição e por isso vou atualizar minha variável com o novo valor substituído
}

let urlDoTexto = "";

for (let palavra of texto) {
    let primeiraletra = palavra.slice(0, 1);
    let restantedasletras = palavra.slice(1);
    urlDoTexto += primeiraletra.toLowerCase() + restantedasletras;
}

console.log(urlDoTexto);