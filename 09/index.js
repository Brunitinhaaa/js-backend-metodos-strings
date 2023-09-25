const nome = 'Guido Cerqueira';

let nickname = "";

function geradorNickname() {
    nickname = nome.slice(0, 13);
    nickname = nickname.padStart(nickname.length + 1, "@");
    nickname = nickname.toLowerCase().trim();

    return console.log(nickname);
}

geradorNickname(nome);