		//Um pequena função em JavaScript que mostra uma mensagem quando clicar no botão enviar mensagem na página//
	//	form.addEventListener('submit', e => {
		//	validador();
			//e.preventDefault();
			
	//	});
	//função geral de validação //
	function validador() {
			//verifica se a área de texto do campo mensagem esta em branco//
			 if (document.getElementById("txtarea_consolidation").value == ""){
                   alert("Preencha o campo de mensagem antes de enviar");
                   document.getElementById("txtarea_consolidation").focus();
               }
               else {
				   //se o campo texto estiver em branco ele chama a funação geral//
                   geral();                   
               }	
			   
		function geral (){
			//função geral chama todas as funções abaixo, onde cada uma faz um validação para cada campo//
			nome1();
			email1();
			validPhone();
			obrigado();	
			
			//Verifica o campo nome, se possui números, se esta em branco e etc, e retorna uma mensagem caso tenha algo errado//
			function nome1() {
				 const nome = document.getElementById("nome");
				 const nome1 = document.getElementById("nome1");
				 const nomevalue = nome.value;
				 const number = /[0-9]/;
				 const testnb = number.test(nomevalue);
				 var n1 = 0;
				
				 console.log(nomevalue);
			 
				 if (nomevalue === ''){
					 nome1.innerHTML = "Nome em branco.";					 
				 }
				 else if (testnb == true){
					 nome1.innerHTML = "Não pode haver números(s) no nome.";				 
				 }
				 else {
					 nome1.innerHTML = "";					 
					 n1 = 1;					 					 
				 }
         return n1;			 
			}
			//Verifica o campo e-mail, se possui @ e .com e etc, caso tenha algo errado retorna uma mensagem//
			function email1() {
				const email = document.getElementById("email");
				const email1 = document.getElementById("email1");
				const emailvalue = email.value;
				var e1 = 0;
				
				var filtroEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				
				if (emailvalue === ''){
					email1.innerHTML = "E-mail em branco."
				}
				else if (!filtroEmail.test(emailvalue)){
					email1.innerHTML = "Este e-mail não é válido";
					email1.focus();
				}
				else {
					email1.innerHTML = "";
					e1 = 1;					
				}
        return e1;	
			}
			//Verifica o campo celular, se possui os números compatíveis com um número de celular, caso tenha algo errado retorna uma mensagem//
			function validPhone () {
				const cel = document.getElementById("cel");
				const cel1 = document.getElementById("cel1");
				const celvalue = cel.value;
				var c1 = 0;
				var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');						
				
				if (celvalue === ''){
					cel1.innerHTML = "Celular em branco."
				}
				else if (!regex.test(celvalue)){
					cel1.innerHTML = "Este Celular não é válido, preencha igual a este formato: (11)9876-54321 sem espaços, e com () e -";
					cel1.focus();		
				}
				else{
					cel1.innerHTML = "";
					c1 = 1;					
				}
				return c1;
			}
		//Essa função checa se o nome, e-mail, celular e texto estão todos ok, e retorna uma mensagem agradecendo//
    	function obrigado(){
        var a = nome1();
        var b = email1();
        var c = validPhone ();

				if(a==1 && b == 1 && c ==1){
					alert("Obrigado por enviar sua mensagem! responderemos em breve.");
				}else{
					null
				}
			}	

	}			

	}	
