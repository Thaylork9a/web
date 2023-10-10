
var i;

var media = parseFloat(media);
	


		var alunos = prompt("Digite o números total de alunos:  ");

		for(i = 1; i  < alunos; i++){
	
		var nota1 = prompt(" Digite a 1ª NOTA ");
			nota1 = parseFloat(nota1);
		var nota2 = prompt(" Digite a 2ª NOTA ");
			nota2 = parseFloat(nota2);

			media = (nota1 + nota2)/2
		if (media >= 5){
				document.write("ALUNO "+i+" Aprovado" + media +"<br>");
			}else{
				document.write("ALUNO "+i+" Reprovado" + media +"<br>");

}
}
	