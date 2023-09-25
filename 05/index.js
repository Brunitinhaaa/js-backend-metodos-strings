const numeroCartao = '1111222233334444';
let numeroEscondido = "";

for (i = 0; i < numeroCartao.length; i++) {
    if (i < 4 || i > 12) {
        numeroEscondido += numeroCartao[i];
    } else {
        numeroEscondido += '*';
    }
}
console.log(numeroEscondido);