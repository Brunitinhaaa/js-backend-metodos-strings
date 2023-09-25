let cpf = "011.022.033-44";

function removerpontuacao() {
    while (cpf !== cpf.replace(".", "") || cpf !== cpf.replace("-", "")) {
        cpf = cpf.replace(".", "");
        cpf = cpf.replace("-", "");
    }
    return console.log(cpf);
}

removerpontuacao(cpf);