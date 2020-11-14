function validador() {
    email();
    senha();
}

// validador do email
function email() {
    const email = document.getElementById("email");
    const emailvalue = email.value;

    const filtroEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailvalue === "") {
        console.log("[erro] - e-mail em branco");
    } else if (!filtroEmail.test(emailvalue)) {
        console.log("[erro] - o e-mail não é valido");
    } else {
        console.log("[    ] - e-mail valido")   ;
    }
}

// validador senha 
function senha(){
    const senha = document.getElementById("senha");
    const senhavalue = senha.value;

    

    const letrasMaiusculas = /[A-Z]/;
    const letrasMinusculas = /[a-z]/; 
    const numeros = /[0-9]/;
    const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    console.log("quantidades de lertas na senha: "+senhavalue.length);


    var auxMaiuscula = false;
    var auxMinuscula = false;
    var auxNumero = false;
    var auxEspecial = false;
    var retorno = false;

    console.log("maiuscula "+letrasMaiusculas.test(senhavalue));
    console.log("Minuscula "+letrasMinusculas.test(senhavalue));
    console.log("Numero "+numeros.test(senhavalue));
    console.log("Especial "+caracteresEspeciais.test(senhavalue));
    console.log(" [senha valida] "+retorno);

    console.log("senha: "+senhavalue);

    if(letrasMaiusculas.test(senhavalue)) {
        auxMaiuscula=true;
    } else {
        auxMaiuscula=false;
    }

    if(letrasMinusculas.test(senhavalue)){
        auxMinuscula=true;
    } else {
        auxMinuscula=false;
    }

    if(numeros.test(senhavalue)) {
        auxNumero=true;
    }  else {
        auxNumero=false;
    }

    if(caracteresEspeciais.test(senhavalue)){
        auxEspecial=true;
    } else {
        auxEspecial=false;
    }

    console.log("                        ->");

    if (auxMaiuscula) {
        console.log("Maiuscula - [ 1 ]");
    } else {
        console.log("Maiuscula - [ 0 ]")
    }

    if (auxMinuscula) {
        console.log("Minuscula - [ 1 ]");
    } else {
        console.log("Minuscula - [ 0 ]")
    }

    if (auxNumero) {
        console.log("Numero    - [ 1 ]");
    } else {
        console.log("Numero    - [ 0 ]")
    }

    if (auxEspecial) {
        console.log("Especial  - [ 1 ]");
    } else {
        console.log("Especial  - [ 0 ]")
    }

    if (senhavalue.length >= 6 && senhavalue.length <= 16) {
        console.log("senha entre 6 - 16 - [ 1 ]");
        retorno = true;
    }else {
        console.log("senha entre 6 - 16 - [ 0 ]");
        retorno = false;
    }

    if (auxMaiuscula&&auxMinuscula&&auxNumero&&auxEspecial&&retorno) {
        console.log("        [senha valida]");
    } else {
        console.log("       [senha invalida]");
    }
}
//