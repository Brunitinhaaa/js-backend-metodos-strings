const cpf = "12345678900";
const cnpj = "12345678000199";

if (cpf.length === 11) {
    const primeiros3dig = cpf.slice(0, 3);
    const segundos3dig = cpf.slice(3, 6);
    const terceiros3dig = cpf.slice(6, 9);
    const ultimos2dig = cpf.slice(9, 11);

    console.log(primeiros3dig + "." + segundos3dig + "." + terceiros3dig + "-" + ultimos2dig);
} else {
    console.log("CPF inválido");
}


if (cnpj.length === 14) {
    const primeiros3dig2 = cnpj.slice(0, 2);
    const segundos3dig2 = cnpj.slice(2, 5);
    const terceiros3dig2 = cnpj.slice(5, 8);
    const ultimos4dig2 = cnpj.slice(8, 12);
    const ultimos2dig2 = cnpj.slice(12, 14);

    console.log(primeiros3dig2 + "." + segundos3dig2 + "." + terceiros3dig2 + "/" + ultimos4dig2 + "-" + ultimos2dig2);
} else {
    console.log("CNPJ inválido");
}