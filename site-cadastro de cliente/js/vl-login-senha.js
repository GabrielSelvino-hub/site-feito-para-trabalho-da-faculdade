function validador() {
    email();
    senha();
}

//valida email
function email() {
    const email = document.getElementById("email");
    const emailvalue = email.value;

    // fiz isso para que a validação dos logins seja feit averificando se existe esta pessoa, 
    // como não a pessoa cadastradas de verdade este comando verifica se a (BM) no email
    // para dar como valido
    const segredo = /@bm./;
    const filtroEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    console.log("segredo: "+segredo.test(emailvalue));
    console.log("filtroemail: "+filtroEmail.test(emailvalue));
    console.log(emailvalue);

    // validador do email

    if (emailvalue === "") {
        console.log("[erro] - e-mail em branco");
    } else if (filtroEmail.test(emailvalue)&&segredo.test(emailvalue)) {
        console.log("[    ] - e-mail valido")   ;
    } else {
        console.log("[erro] - o e-mail não é valido");
    }

    console.log(":----------------------------------------------------:");
}

// valida senha
function senha() {
    const senha = document.getElementById("senha");
    const senhavalue = senha.value;

    console.log("senha: "+senhavalue);

    if (senhavalue === "") {
        console.log("[erro] - e-mail em branco");
    } else if (senhavalue == "admin01") {
        console.log("[    ] - senha valida");
    } else {
        console.log("[erro] - senha invalida");
    }

    console.log(":----------------------------------------------------:");
}