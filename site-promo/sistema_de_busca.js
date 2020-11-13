var pesquisa_input = document.querySelectorAll(".pesquisa");

for(var i in pesquisa_input){
	
	pesquisa_input[i].onkeyup=function(e){

		var reg = new RegExp(this.value.toLowerCase(),"g")
		var lis = this.parentElement.querySelector(".lista");

		console.log(lis)

		for(var j of lis.children){
			if( !j.getAttribute("nome").match(reg))
                j.style.display="none"
			else
				j.removeAttribute("style")
        }
        
console.log(pesquisa_input);
console.log(reg);
console.log(lis);
console.log(j);
	}
}
