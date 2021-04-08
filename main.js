var num, qoy="qoy", qoylar="qoylar", sum="";
num = prompt("Uyqingiz kelyaptimi qo'ylarni sanaymiz")
for (i=1; i<=num; i++){
    if(i===1){
        sum = sum + i + "qoy..."
    }
    else{
        sum = sum + i + "qoylar..."
    }
}
alert(sum)
