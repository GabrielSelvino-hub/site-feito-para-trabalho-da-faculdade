function addItem() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const nascimento = document.getElementById("dnasc").value;
    const telefone = document.getElementById("telefone").value;

    // tem que fazer teste para seber se é male ou famele
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

    var sexo = '';

    if (male == true) {
        sexo = 'Masculino';
    } else {
        sexo = 'Feminino';
    }
    
    const emailobj = JSON.stringify({email});
    const senhaobj =JSON.stringify({senha});
    const nomeobj = JSON.stringify({nome});
    const cpfobj = JSON.stringify({cpf});
    const nascimentoobj = JSON.stringify({nascimento});
    const telefoneobj = JSON.stringify({telefone});
    const sexoobj = JSON.stringify({sexo});

    localStorage.setItem('email', emailobj);
    localStorage.setItem('senha', senhaobj);
    localStorage.setItem('nome', nomeobj);
    localStorage.setItem('cpf', cpfobj);
    localStorage.setItem('dnasc', nascimentoobj);
    localStorage.setItem('tele', telefoneobj);
    localStorage.setItem('sexo', sexoobj);
}
