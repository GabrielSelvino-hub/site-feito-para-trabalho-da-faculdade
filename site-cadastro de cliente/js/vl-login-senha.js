function validador() {
    email();
    senha();
	var em = email();
	var sen = senha();
	
	if (em==1&&sen==1){
		alert("✓ Você conseguiu logar com sucesso, Bem Vindo(a)!");
	}else{
		alert(" ❌ E-mail e ou Senha inválido ou em branco.");
	}
}

function validemailrec() {
    emailrecuperacao();
    var em2 = emailrecuperacao();
	
	if (em2==1){
		alert("✓ Uma nova senha foi enviada no seu e-mail cadastro!");
	}else{
		alert(" ❌ E-mail inválido ou em branco");
	}
}

//valida email
function email() {
    const email = document.getElementById("email");
    const emailvalue = email.value;
	var em = 0;
    // fiz isso para que a validação dos logins seja feit averificando se existe esta pessoa, 
    // como não a pessoa cadastradas de verdade este comando verifica se a (@BM.) no email
    // para dar como valido
    const segredo = /@bm./;
    const filtroEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // validador do email
    if (emailvalue === "") {
        email1.innerHTML = ("❌ Campo obrigatório <br><br>");
    } else if (filtroEmail.test(emailvalue)&&segredo.test(emailvalue)) {
        email1.innerHTML = "<div style='color: green;'>✓ Válido<br><br></div>" ;
		em = 1;
    } else {
        email1.innerHTML = ("❌ E-mail inválido - só aceita e-mails com @bm.com ou @bm.com.br <br><br>");
    }
	return em;
}

// valida senha
function senha() {
    const senha = document.getElementById("senha");
    const senhavalue = senha.value;
	var sen = 0;

    if (senhavalue === "") {
        senha1.innerHTML = "❌ Senha em branco";
    } else if (senhavalue == "admin01") {
        senha1.innerHTML = "<div style='color: green;'>✓ Válido</div>";
		sen = 1;
    } else {
        senha1.innerHTML = "❌ Senha incorreta. (a senha correta = admin01)";
    }
    return sen;
}

function emailrecuperacao() {
    const emailrec = document.getElementById("emailrec");
    const emailrecvalue = emailrec.value;
	var em2 = 0;
    // fiz isso para que a validação dos logins seja feit averificando se existe esta pessoa, 
    // como não a pessoa cadastradas de verdade este comando verifica se a (@BM.) no email
    // para dar como valido
    const segredo = /@bm./;
    const filtroEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // validador do email
    if (emailrecvalue === "") {
        email2.innerHTML = ("❌ Campo obrigatório <br><br>");
    } else if (filtroEmail.test(emailrecvalue)&&segredo.test(emailrecvalue)) {
        email2.innerHTML = "<div style='color: green;'>✓ Válido<br><br></div>" ;
		em2 = 1;
    } else {
        email2.innerHTML = ("❌ E-mail inválido - só aceita e-mails com @bm.com ou @bm.com.br <br><br>");
    }
	return em2;
}
