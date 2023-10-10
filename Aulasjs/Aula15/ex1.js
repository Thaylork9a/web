// Atividade 1

var valorVenda = prompt("Informe o valor de Venda");
valorVenda = parseFloat(valorVenda);

var pergunta = prompt ("Informe  a forma de pagamento: 1 À vista, 2 À Prazo 30, 3 À Prazo 60, 4 À Prazo 90, 5 Débito, 6 Crédito: ");
pergunta = parseInt(pergunta);

switch(pergunta){

    case 1 :
        
        document.write("O valor à vista ficou: R$ " +valorVenda *0.90);

        break;
    
    case 2 :
        document.write("O valor à prazo de 30 dias ficou: R$ " +valorVenda *0.95);
        break;

    case 3 :
        document.write("O valor à prazo de 60 dias ficou: R$ " +valorVenda);
        break;

    case 4 :
        document.write("O valor à prazo de 90 dias ficou: R$ " +valorVenda *1.05);
        break;

    case 5 :
        document.write("À O valor no débito ficou: R$ " +valorVenda *0.92);
        break;

    case 6 :
        document.write("O valor no crédito ficou: R$" +valorVenda *0.93)
        break;    
    default:
        document.write("Caso Inválido");
}