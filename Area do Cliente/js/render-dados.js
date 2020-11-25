function renderItem() {
    //local e filtro de dados
    var emailUser = localStorage.getItem("email")
    .split('{"email":"').join('');

    var senhaUser = localStorage.getItem("senha")
    .split('{"senha":"').join('');

    var nomeUser = localStorage.getItem("nome")
    .split('{"nome":"').join('');

    var cpfUser = localStorage.getItem("cpf")
    .split('{"cpf":"').join('');

    var dnascUser = localStorage.getItem("dnasc")
    .split('{"nascimento":"').join('');

    var teleUser = localStorage.getItem("tele")
    .split('{"telefone":"').join('');

    var sexoUser = localStorage.getItem("sexo")
    .split('{"sexo":"').join('');
    
    //add dados a pagina e filtro de dados
    document.getElementById("email").innerHTML = `
        Email: `+emailUser.split('"}').join('');

    document.getElementById("senha").innerHTML = `
        Senha: `+senhaUser.split('"}').join('');

    document.getElementById("nome").innerHTML = `
        Nome: `+nomeUser.split('"}').join('');

    document.getElementById("cpf").innerHTML = `
        Cpf: `+cpfUser.split('"}').join('');

    document.getElementById("dnasc").innerHTML = `
        Dascimento: `+dnascUser.split('"}').join('');

    document.getElementById("tele").innerHTML = `
        Telefone: `+teleUser.split('"}').join('');

    document.getElementById("sexo").innerHTML = `
        Sexo: `+sexoUser.split('"}').join('');
}


