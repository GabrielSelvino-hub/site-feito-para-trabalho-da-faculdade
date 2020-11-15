
function validador() {
    email();
    senha();
    senharep();
    nome();
    cpf();
    telefone();
	sexo();
	data();
	privac();
	var s1 = senha();
	var s2 = senharep();
	var n1 = nome();
	var e1 = email();
	var c1 = cpf();
	var t1 = telefone();
	var s3 = sexo();
	var d1 = data();
	var p1 = privac();
	
	if(s1==1&&s2==1&&n1==1&&e1==1&&c1==1&&t1==1&&s3==1&&d1==1&&p1==1){
		alert("Muito obrigado por se cadastrar, aproveite nossas ofertas!");
	}else{
		alert("Não é possível cadastrar! Há campo(s) em branco, ou preenchido errado");
	}
}

// validador do email
function email() {
    const email = document.getElementById("email");
	const email1 = document.getElementById("email1");
    const emailvalue = email.value;
	var e1=0;
	
    const filtroEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailvalue === "") {
        email1.innerHTML = "❌ Campo obrigatório<br><br>";		
    } else if (!filtroEmail.test(emailvalue)) {
        email1.innerHTML = "❌ O e-mail não é valido<br><br>";
    } else {
        email1.innerHTML = "<div style='color: green;'>✓ Válido<br><br></div>";
		e1=1;
    }
	return e1;
}

// validador senha 
function senha(){
    const senha = document.getElementById("senha");
    const maiuscula1 = document.getElementById("maiuscula1");
	const minuscula1 = document.getElementById("minuscula1");
	const especial1 = document.getElementById("especial1");
	const numeros1 = document.getElementById("numeros1");
	const quantidade1 = document.getElementById("quantidade1");
	const senha1 = document.getElementById("senha1");
	const senhavalue = senha.value;
	
    const letrasMaiusculas = /[A-Z]/;
    const letrasMinusculas = /[a-z]/; 
    const numeros = /[0-9]/;
    const caracteresEspeciais = /[!|@|#|$|'|"|%|^|&|*|(|)|-|_]/;

    var auxMaiuscula = false;
    var auxMinuscula = false;
    var auxNumero = false;
    var auxEspecial = false;
    var retorno = false;
	var s1=0;

    if(letrasMaiusculas.test(senhavalue)) {
        auxMaiuscula=true;
		maiuscula1.innerHTML = "<div style='color: green;'>✓ Possui letra maiúscula</div>";
    } else {
        auxMaiuscula=false;
		maiuscula1.innerHTML = "❌ Precisa ter pelo menos 1 letra maiúscula";
    }

    if(letrasMinusculas.test(senhavalue)){
        auxMinuscula=true;
		minuscula1.innerHTML = "<div style='color: green;'>✓ Possui letra minúscula</div>";
    } else {
        auxMinuscula=false;
		minuscula1.innerHTML = "❌ Precisa ter pelo menos 1 letra minúscula";
    }

    if(numeros.test(senhavalue)) {
        auxNumero=true;
		numeros1.innerHTML = "<div style='color: green;'>✓ Possui número</div>";
    }  else {
        auxNumero=false;
		numeros1.innerHTML = "❌ Precisa ter número";
    }

    if(caracteresEspeciais.test(senhavalue)){
        auxEspecial=true;
		especial1.innerHTML = "<div style='color: green;'>✓ Possui caracter especial</div>";
    } else {
        auxEspecial=false;
		especial1.innerHTML = "❌ Precisa ter caracter especial";
    }

    console.log(" - - - ->");

    if (senhavalue.length >= 6 && senhavalue.length <= 16) {
        retorno = true;
		quantidade1.innerHTML = "<div style='color: green;'>✓ Possui entre 6 a 16 caracter</div>";
    }else {
        retorno = false;
		quantidade1.innerHTML = "❌ Precisa ter entre 6 a 16 caracter";
    }

    if (auxMaiuscula==true&&auxMinuscula==true&&auxNumero==true&&auxEspecial==true&&retorno==true) {
        senha1.innerHTML = "<div style='color: green;'>✓ Senha válida<br><br></div>";
		s1 =1;

    } else {
        senha1.innerHTML = "❌ Senha inválida<br><br>";
    }
	
	return s1;
}

// senha repetida 
function senharep() {
    const senha = document.getElementById("senha");
	const senharep2 = document.getElementById("senharep2");
    const senhavalue = senha.value;

    const senharep = document.getElementById("senharep");
    const senharepvalue = senharep.value;

	var s2=0;

    if (document.getElementById("senharep").value === '') {
		senharep2.innerHTML = "";
	}else if(senhavalue == senharepvalue) {
        senharep2.innerHTML = "<div style='color: green;'>✓ Senhas iguais<br><br></div>";
		var s2=1;
    } else {
        senharep2.innerHTML = "❌ As senhas estão diferentes<br><br>";
    }
	
	return s2;
}

//validador do Nome
function nome() {
    const nome = document.getElementById("nome");
    const nomevalue = nome.value;
    const number = /[0-9]/;
    const testnb = number.test(nomevalue);
	var n1=0;
    
	if (nomevalue === ''){
         nome1.innerHTML = "❌ Campo obrigatório<br><br>";
    }
    else if (testnb == true){
        nome1.innerHTML = "❌ Não pode conter números no nome<br><br>";
    } else {
        nome1.innerHTML = "<div style='color: green;'>✓ Nome válido<br><br></div>";
		var n1=1;
    }
	return n1;
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
	var c1=0;
	
    if (cpfvalue === ''){
		cpf1.innerHTML = "❌ Campo obrigatório<br><br>";
    } else if (TestaCPF(cpfsembara)) {
        cpf1.innerHTML = "<div style='color: green;'>✓ CPF válido<br><br></div>";
		c1=1;
    } else {
		cpf1.innerHTML = "❌ CPF inválido<br><br>";
    }
	return c1;
}

function telefone() {
    const telefone = document.getElementById("telefone");
    const telefonevalue = telefone.value;
    const telsemchaves0 = telefonevalue.split('(').join('');
    const telsemchaves1 = telsemchaves0.split(')').join('');
    const telsembara = telsemchaves1.split('-').join('');
	var t1=0;
	
    const number = /[a-zA-Z]/;
    const testnb = number.test(telsembara);

    if (testnb == false&&(telsembara.length == 11 ||telsembara.length == 10)) {
        telefone1.innerHTML = "<div style='color: green;'>✓ Telefone válido<br><br></div>";
		t1=1;
    } else if (testnb == true) {
        telefone1.innerHTML = "❌ Telefone inválido<br><br>";
    } else {
        telefone1.innerHTML = "❌ Campo obrigatório<br><br>";
    }    
	return t1;
}

function sexo(){
	
	var male = document.getElementById("male");
	var female = document.getElementById("female");
	var sex = 0;
	
	if(male.checked == true || female.checked == true){
		sexo1.innerHTML = "";
		sex = 1;
	} else{
		sexo1.innerHTML = "Campo obrigatório"
	}
	return sex;
}

function data(){
	const dnasc = document.getElementById("dnasc").value;
	var dat = 0;
	if(dnasc === ''){
		dnasc1.innerHTML = "Obrigatório - Preencha no formato Dia/Mês/Ano";
	}else{
		dnasc1.innerHTML = "";
		dat=1;
	}
	return dat;
}


function privac(){
	var privac = document.getElementById("privac");
	var privac1 = document.getElementById("privac1");
	var priv = 0;
	
	if(privac.checked == true){
		privac1.innerHTML = "";
		priv = 1;
	} else{
		privac1.innerHTML = "Campo obrigatório"
	}
	return priv;
}
