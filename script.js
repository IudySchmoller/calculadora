function calcula(opera) {
    let num1 = parseFloat(document.getElementById('zeroum').value);
    let num2 = parseFloat(document.getElementById('zerodois').value);
    let reultado = 0;
    if(isNaN(num1)||isNaN(num2)){
        alert('acorda pra vida.');

    }else{
        if(opera=='+'){
            reultado = num1 + num2;
        }else if(opera=='-'){
            resultado = num1 - num2
        }
    }    
    }

}