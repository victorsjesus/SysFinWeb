const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// Moldar o "Manter conectado e Esqueci a senha" conforme tamanho do container
window.onload = carregar();
function carregar () {
    largura = parseInt(getComputedStyle(document.getElementById('cardlogin'),null).width);
    if (largura < 350) {
        document.getElementById("esq").className = 'link-esq';
	}
	else{
		document.getElementById("esq").className = '';
	}
};

window.addEventListener('resize', function carregar() {
    largura = parseInt(getComputedStyle(document.getElementById('cardlogin'),null).width);
	if (largura < 350) {
        document.getElementById("esq").className = 'link-esq';
	}
	else{
		document.getElementById("esq").className = '';
	}
});


function cadastrarFlip(){
	document.getElementById("cardlogin").className = 'card-login girar';
	document.getElementById("front-card").className = 'animate-hide';
	
	largura = getComputedStyle(document.getElementById('cardlogin'),null).width;
	altura = parseInt(getComputedStyle(document.getElementById('cardlogin'),null).height);
	
	document.getElementById("cardlogin").style.width = largura + 'px';
	document.getElementById("cardlogin").style.height = altura + 'px';
	
	setTimeout(function(){
		verifica_abertura();
	}, 250);

	function verifica_abertura(largura, altura){
		document.getElementsByClassName("flip-card-back")[0].style.display = 'block';
		document.getElementById("front-card").style.display = 'none';	
	}
}




function voltaFlip() {
	document.getElementById("cardlogin").className = 'card-login';
	document.getElementById("front-card").className = 'flip-card-front';
	//
	setTimeout(function(){
		verifica_abertura();
	}, 250);

	function verifica_abertura(largura, altura){
		document.getElementsByClassName("flip-card-back")[0].style.display = 'none';
		document.getElementById("front-card").style.display = 'block';	
	}
}