function validador() {
    nomeesobre();
}

function nomeesobre() {
    const nome = document.getElementById("nome");
    const nomevalue = nome.nodeValue;
    const number = /[0-9]/;
    const testnb = number.test(nomevalue);

    if (nomevalue === '') {
        console.log("em branco")
    } else if (testnb == true ) {
        console.log("não pode conter numeros no nome");
    } else {
        console.log("nome valido");
    }
}

