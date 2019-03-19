//funkcja (podprogram) wydzielony fragment kodu, który ma konkretny cel do wykonania
// w nawiasach () argument/parametr - zmienna posłana do funkcji, potrzebna do wykonania jakiegoś zadania np. policzenie pierwiastka 
function actualDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    
    var hour = date.getHours();
    if(hour <10) hour = "0"+hour;

    var minute = date.getMinutes();
    if(minute <10) minute = "0"+minute;

    var second = date.getSeconds(); 
    if(second <10) second = "0"+second;

    // .innerHTML - wewnętrzna podmianka co jest w html'u
    document.getElementById('clock').innerHTML = day+"/"+month+"/"+year+ " | "+hour+":"+minute+":"+second
    
    setTimeout("actualDate()", 1000);
}

function functionName(parametr1, parametr2, parametr3){
    // code to be executed
}


