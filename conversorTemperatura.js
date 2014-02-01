"use strict";
function conversor() {
  var expresion = /([-+]?\d+(?:\.\d+)?)º*\s*([cCfF])/;

  if (entrada.value.match(expresion)) {
    if (entrada.value.match(expresion)[2] == 'c' || entrada.value.match(expresion)[2] == 'C') {
    	if (entrada.value.match(expresion)[1] < -273.15) {
			salida.innerHTML = "ERROR. Valor fuera de rango";	
		}else {
      	salida.innerHTML = ((parseFloat(entrada.value.match(expresion)[1]) * 9/5)+32).toFixed(2)+" Farenheit"
		}    
    }
    else {
    	if (entrada.value.match(expresion)[1] < -459.67) {
			salida.innerHTML = "ERROR. Valor fuera de rango";	
		}else {
      	salida.innerHTML = ((parseFloat(entrada.value.match(expresion)[1]) - 32)*5/9).toFixed(2)+" Celsius"
		}    
    }
  }
  else {
    salida.innerHTML = "Por favor revise el valor introducido.";
  }
}