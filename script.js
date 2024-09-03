function calcula(opera) {
    let num1 = parseFloat(document.getElementById('zeroum').value);
    let num2 = parseFloat(document.getElementById('zerodois').value);
    let resultado = 0;
    let num3 = 100;
    if(isNaN(num1)||isNaN(num2)){
        alert('acorda pra vida.');

    }else{
        if(opera=='+'){
            resultado = num1 + num2;
        }else if(opera=='-'){
            resultado = num1 - num2;
        }
        else if(opera=='*'){
            resultado = num1 * num2;
        }
        else if(opera=='/'){
            resultado = num1 / num2;
        }else if(opera=='%'){
            resultado = num1 % num3;
        }    
        document.getElementById('resultado').textContent = "resultado: " + resultado;
    }    
}