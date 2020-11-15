function validador() {
    email();
    senha();
    senharep();
    nome();
    cpf();
    numero();
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
    console.log(":----------------------------------------------------:");
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

    console.log(" - - - ->");

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

    console.log(":----------------------------------------------------:");
}

// senha repetida

function senharep() {
    const senha = document.getElementById("senha");
    const senhavalue = senha.value;

    const senharep = document.getElementById("senharep");
    const senharepvalue = senharep.value;

    if (senhavalue == senharepvalue) {
        console.log("senha repitida valida");
    } else {
        console.log("senha repitida invalida");
    }

    console.log(":----------------------------------------------------:");
}

//validador do Nome

function nome() {
    const nome = document.getElementById("nome");
    const nomevalue = nome.value;
    const number = /[0-9]/;
    const testnb = number.test(nomevalue);

    if (nomevalue === ''){
        console.log("NOME EM BRANCO");
    }
    else if (testnb == true){
        console.log("NÂO PODE CONTER NUMERO(S) NO NOME");
    } else {
        console.log("NOME VALIDO");
    }
    console.log("valor do nome: "+nomevalue);

    console.log(":----------------------------------------------------:");
}

//validador cpf

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (var i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function cpf() {
    const cpf = document.getElementById("cpf");
    const cpfvalue = cpf.value;
    const cpfsemponto = cpfvalue.split('.').join('');
    const cpfsembara = cpfsemponto.split('-').join('');

    if (cpfvalue === ''){
        console.log("CPF EM BRANCO.");
    }
    else if (TestaCPF(cpfsembara)) {
        console.log("CPF VALIDO");
    } else {
        console.log("CPF INVALIDO");
    }
    
    console.log(":----------------------------------------------------:");
}

function numero() {
    const numero = document.getElementById("numero");
    const numerovalue = numero.value;
    const nsemchaves0 = numerovalue.split('(').join('');
    const nsemchaves1 = nsemchaves0.split(')').join('');
    const nsembara = nsemchaves1.split('-').join('');

    const number = /[a-zA-Z]/;
    const testnb = number.test(nsembara);

    if (testnb == false&&nsembara.length == 11) {
        console.log("numero valido");
    } else if (testnb == true) {
        console.log("não pode conter letras ")
    } else {
        console.log("em branco");
    }

    console.log(":----------------------------------------------------:");
}