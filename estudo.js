let tabuada = 2;
function escreva(){
    document.write("<h1> Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}

let lista = ["amor", "afeto", "carinho", "lealdade", "companheirismo", "confianca", "empatia" ];

function mostraLista(){
     document.write("tamanho da lista: " + lista.length + "<br>");
     document.write("principal: " + lista[0] + "<br>");
     for(let i = 0; i < lista.length; i++){
        document.write("essencial: " + lista[i] + "<br>"); 


     }
}

function multiplica(){
    for(let i = 1; i <= 10; i++){
    document.write("tabuada do  = " + i + "<br>");
    for(let j = 1; j <=10; j++){
        document.write(i + " x "+j+" = " + (i*j) + "<br>");
       }
       document.write("<br>");
    }
}
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;

    if(!Number(v)){
        alert("o valor deve ser numérico.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return

    }

    if(!Number(j)){
        alert("os juros deve ser numérico.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return

    }

    if(!Number(t)){
        alert("o valor dos meses deve ser numérico.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return

    }
    let r = 0;
    for(let i=1; i <= t; i++){
        r = v * (1+(j/100));
        texto = "Mês "+ i + " valor " + moeda(r) + "<br>";
       //document.write("Mês " + i + " valor:" + moeda(r)  + "<br>");
        v = r;
    }
    document.getElementById("mês").innerHTML=texto;
document.getElementById("totalGeral").innerHTML="Total: "+moeda(r);
    //document.write("resultado: " + moeda (r));
}

function media(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let n4 = document.getElementById("n4").value;

    let r = (Number(n1)+Number(n2)+Number(n3)+Number(n4))/4;
    document.getElementById("resul").innerHTML = "media : " + r;
 

}

function multiplica(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let n4 = document.getElementById("n4").value;

    let r = (Number(n1)*Number(n2)*Number(n3)*Number(n4));
    document.getElementById("resul").innerHTML = "resultado : " + r;


}

function soma(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let n4 = document.getElementById("n4").value;

    let r = (Number(n1)+Number(n2)+Number(n3)+Number(n4));
    document.getElementById("resul").innerHTML = "resultado : " + r;


}
