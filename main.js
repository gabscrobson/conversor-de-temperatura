function Converter() {
    var element = document.getElementById("dolar");
    var value = parseFloat(element.value);
    console.log(value);
    var rvalue = parseFloat(value + 273.15).toFixed(2);
    
  
    var elementohtml = document.getElementById("valorConvertido");
    var texto = rvalue + "°F";
    elementohtml.innerHTML = texto;
  }
  function Converter2() {
    var element2 = document.getElementById("dolar");
    var value2 = parseFloat(element2.value);
    var rvalue2 = parseFloat((value2 * (9/5)) + 32).toFixed(2);
    var elementohtml2 = document.getElementById("valorConvertido");
    var texto2 = rvalue2 + " K";
    elementohtml2.innerHTML = texto2;
  }