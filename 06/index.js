const celular = 96407755;
let celularStr = String(celular);

if (celularStr.length === 11) { // Tem DDD e tem o 9
    console.log("(", celularStr.slice(0, 2), ")", celularStr.slice(2, 3), celularStr.slice(3));
} else if (celularStr.length === 10) { // Tem DDD e não tem o 9
    console.log("(", celularStr.slice(0, 2), ") 9 ", celularStr.slice(2));
} else if (celularStr.length === 9 && celularStr[0] === "9") { // Não tem DDD e tem o 9
    console.log(celularStr.slice(0, 1), celularStr.slice(1));
} else if (celularStr.length === 8) { // Não tem DDD e não tem o 9
    console.log("9 ", celularStr);
}

