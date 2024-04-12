function colorirDia(){
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[(parseInt(days))];
  
    td.style.backgroundColor = color;
  
    // Verifica se o número digitado é válido (não maior que 30)
if (parseInt(days) > 30) {
    alert("Data Indisponível");
}
    // Verifica se o número digitado é válido (não menor ou igual a 0)
if (parseInt(days) <= 0) {
    alert("Data Indisponível");
}
}