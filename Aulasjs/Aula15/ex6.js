//ATIVIDADE 6
var n1 = prompt("Digite um Número");
n1 = parseFloat(n1);
var n2 = prompt("Digite um Número");
n2 = parseFloat(n2);
var n3 = (n1 -n2);
n3 = parseFloat(n3);

if(n1 > n2){
    document.write(n1 + " É maior que " +n2+ " Diferença de:" + n3 )
} else if (n1 < n2) {
    document.write(n2 + " É maior que " +n1+ " Diferença de:" + n3 )
} else {
    document.write(n1 + " É igual a"+n2 + " Diferença de:" + n3 )
}