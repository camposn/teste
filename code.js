var oxitonas_certas = ["Será", "Pajé", "Ceará", "Tracajá","Amapá",
					   "Sofá", "Vatapá", "Pontapé", "Também", "Ninguém",
					   "Você", "Bongô","Jiló","Urubu","Caqui",
					   "Anzol", "Computador", "Civil", "Funil", "Cristal",
					   "Curió", "Ali", "Condor", "Hangar", "Harém",
					   "Café", "Paiol", "Recém", "Refém", "Sutil",
					   "Maracujá", "Maringá", "Mocotó", "Armazém","Dendê",
					   "Filé", "Sapoti", "Bidê", "Crochê", "Purê"];

var oxitonas_erradas = ["Sera", "Paje", "Ceara", "Tracaja","Amapa",
						"Sofa", "Vatapa", "Pontape", "Tambem", "Ninguem",
						"Voce", "Bongo","Jilo","Urubú","Caquí",
						"Anzól", "Computadôr", "Civíl", "Funíl", "Cristál",
						"Curio", "Alí", "Condôr", "Hangár", "Harem",
						"Cafe","Paiól", "Recem", "Refem", "Sutíl",
						"Maracuja", "Maringa", "Mocoto", "Armazem", "Dende",
						"File", "Sapotí", "Bide", "Croche", "Pure"];
//----------------------------------------------------------------
var paroxitonas_certas = ["Tórax", "Bíceps","Horário","Critério", "Fácil",
						  "Cáries","Lápis","Glúten", "Caráter", "Vírus",
						  "Parada", "Hifens", "Camisa","Ponte", "Garrafa",
						  "Estéril", "Fácil", "Zíper", "Fóssil", "Flúor",
						  "Éden", "Elétron", "Cromossomo", "Caracteres", "Cível",
						  "Ônix", "Pênsil", "Têxtil", "Âmbar", "Erudito",
						  "Filantropo", "Míssil", "Néctar", "Níquel", "Nêutron",
						  "Bônus", "Bênção", "Sintaxe", "Próton", "Mórmon"];

var paroxitonas_erradas = ["Torax", "Biceps","Horario","Criterio", "Facil",
							"Caries", "Lapis", "Gluten", "Carater", "Virus",
							"Paráda", "Hífens", "Camísa","Pônte", "Garráfa",
							"Esteril", "Facil", "Ziper", "Fossil", "Fluor",
							"Eden", "Eletron", "Cromossômo", "Caractéres", "Civel",
							"Onix", "Pensil", "Textil", "Ambar", "Erudíto",
							"Filantrôpo", "Missil", "Nectar", "Niquel", "Neutron",
							"Bonus", "Benção", "Sintáxe", "Proton", "Mormon"];
//----------------------------------------------------------------
var proparoxitonas_certas = ["Ônibus", "Próximo", "Álcool","Máscara","Náufrago",
							 "Cérebro", "Trágico", "Límpido", "Sólido", "Cômodo",
							 "Prólogo","Relâmpago","Lâmpada", "Gástrico","Lógico",
							 "Alcoólatra", "Álibi", "Andrógino", "Cônjuge", "Míope",
							 "Ângulo", "Anêmona", "Húngaro", "Íngreme", "Pântano",
							 "Bígamo", "Leucócito", "Protótipo", "Bávaro", "Ávido",
							 "Estereótipo","Efêmero", "Antídoto","Nômade", "Vértice"];

var proparoxitonas_erradas = ["Onibus", "Proximo", "Alcool","Mascara","Naufrago",
							  "Cerebro", "Tragico", "Limpido", "Solido", "Comodo",
							  "Prologo","Relampago","Lampada", "Gastrico","Logico",
							  "Alcoolatra", "Alibi", "Androgino", "Conjuge", "Miope",
							  "Angulo", "Anemona", "Hungaro", "Ingreme", "Pantano",
							  "Bigamo", "Leucocito", "Prototipo", "Bavaro", "Avido",
							  "Estereotipo", "Efemero", "Antidoto", "Nomade", "Vertice"];	
//----------------------------------------------------------------	
var monossilabos_certos = [];

var monossilabos_errados = [];


var ve;	//Variável do vetor 
var	i;	//Variável certo errado
var j;	//Variável da regra			
var ncont = 0;				
				
				
function motor(l){	
	
	//função principal do jogo.				
	var elemento = document.getElementById("butto");
		elemento.style.visibility="hidden";	//Apaga o botão
		//document.getElementById("expli").setAttribute("href",""); //
		document.getElementById("resp").innerHTML ="";//Apaga a resposta
		document.getElementById("resp").style.color ="#7777FF";
		/*var npont = document.getElementById("newpont");
 		npont.innerHTML="00";
 		ncont=0;*/
	
	if(l==0){
	
 	j =Math.floor(Math.random() * 3);
 	var elem_butaoc = document.getElementById("but_certo");
	var elem_butaoe = document.getElementById("but_errado");
		elem_butaoc.setAttribute("onclick","verificar(0)");
		elem_butaoe.setAttribute("onclick","verificar(1)");
 	
	
 		if(j===0){

 			document.getElementById("titulo_regra").innerHTML = "Acentuação de Palavras Oxítonas";
 			document.getElementById("regra").innerHTML = "Devem ser acentuadas as palavras Oxítonas terminadas em a(as), e(es), o(os) e em(ens).";
 			document.getElementById("ex1").innerHTML = "Café";
 			document.getElementById("ex2").innerHTML = "Bongô";
 			document.getElementById("ex3").innerHTML = "Sofá";
 			document.getElementById("ex4").innerHTML = "Chaminé";
 			i=Math.floor(Math.random() * 2);

 				if (i===0) {

 					ve=Math.floor(Math.random() * 40);
 					document.getElementById("palavra_sort").innerHTML = oxitonas_certas[ve];

 				} else {

 					ve=Math.floor(Math.random() * 40);
 					document.getElementById("palavra_sort").innerHTML = oxitonas_erradas[ve];
 				}
 				
		 	 
		 }else if(j===1){
 			
		 	document.getElementById("titulo_regra").innerHTML = "Acentuação de Palavras Paroxítonas";
		 	document.getElementById("regra").innerHTML = "As palavras Paroxítonas devem ser acentuadas se terminarem em i(is), us, r, l, x, n, um(uns), ão(ãos), ã(ãs), ps, on(ons).";
			document.getElementById("ex1").innerHTML = "Lápis";
 			document.getElementById("ex2").innerHTML = "Zíper";
 			document.getElementById("ex3").innerHTML = "Bíceps";
 			document.getElementById("ex4").innerHTML = "Caráter";
 			i=Math.floor(Math.random() * 2);

 				if (i===0) {

 					ve=Math.floor(Math.random() * 40);
 					document.getElementById("palavra_sort").innerHTML = paroxitonas_certas[ve];

 				} else {

 					ve=Math.floor(Math.random() * 40);
 					document.getElementById("palavra_sort").innerHTML = paroxitonas_erradas[ve];
 				}

 		}else if (j===2) {

 			document.getElementById("titulo_regra").innerHTML = "Acentuação de Palavras Proparoxítonas";
 			document.getElementById("regra").innerHTML = "Todas as palavras Proparoxítonas devem ser acentuadas.";
 			document.getElementById("ex1").innerHTML = "Ônibus";
 			document.getElementById("ex2").innerHTML = "Íngreme";
 			document.getElementById("ex3").innerHTML = "Míope";
 			document.getElementById("ex4").innerHTML = "Máscara";
 			i=Math.floor(Math.random() * 2);

 				if (i===0) {

 					ve=Math.floor(Math.random() * 35);
 					document.getElementById("palavra_sort").innerHTML = proparoxitonas_certas[ve];

 				} else {

 					ve=Math.floor(Math.random() * 35);
 					document.getElementById("palavra_sort").innerHTML = proparoxitonas_erradas[ve];
 				}
 		}

}
 	}
 

  function verificar(n){
		
	 //função de verificação certo/errado 
	if((n===0 && i===0) ||( n===1 && i===1) ){
		 ncont+=10;
		document.getElementById("resp").innerHTML ="Resposta Correta";

		var elemento = document.getElementById("butto");
			elemento.style.background="#7777FF;";
			elemento.innerHTML="Próxima palavra";
			elemento.setAttribute("onclick","motor(0)");
			elemento.style.visibility="visible";

		var newelem = document.getElementById("newpont");
		newelem.innerHTML= ncont;
			
		var bestelem = document.getElementById("bestpont");
		var op = bestelem.getAttribute("value");
			if(op == 0){	
	
			bestelem.innerHTML= ncont;
			
}}

	else if((n===0 && i===1)||(n===1 && i===0)){

		ncont=00;
		var newelem = document.getElementById("newpont");
		newelem.innerHTML= ncont;

		document.getElementById("resp").innerHTML ="Resposta Errada";
		document.getElementById("resp").style.color ="red";
		var elem_butaoc = document.getElementById("but_certo");
		var elem_butaoe = document.getElementById("but_errado");
		var elemento = document.getElementById("butto");
			/*elemento.style.background="#CC3300";
			elemento.innerHTML="Ver Explicação";
			elemento.setAttribute("onclick","teste()");*/
			elemento.style.visibility="hidden";
			elem_butaoc.setAttribute("onclick",null);
			elem_butaoe.setAttribute("onclick",null);
			/*elem_butao.style.cursor="";*/

 	}
 }

 function teste(){

 	//função teste do botão explicação
  	document.getElementById("telaexplicacao").style.display="block";
 }

 function teste2(){

 	document.getElementById("telaexplicacao").style.display="none";
 }


