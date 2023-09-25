const nomeArquivo = 'Foto da Familia.png';

function validacaoarquivos() {
    if ((nomeArquivo.includes("jpg")) || (nomeArquivo.includes("jpeg")) || (nomeArquivo.includes("gif")) || (nomeArquivo.includes("png"))) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

validacaoarquivos(nomeArquivo);