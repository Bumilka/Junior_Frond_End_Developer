
function sprawdz(){
    var liczba = document.getElementById("pole").value;
    
    if(liczba > 0) document.getElementById("wynik").innerHTML="dodatnia";
    else if (liczba < 0) document.getElementById("wynik").innerHTML="ujemna";
    else if (liczba == 0) document.getElementById("wynik").innerHTML="zero";
    else document.getElementById("wynik").innerHTML="to nie jest liczba";  
    //pobież wartość z pola adycyjnego
    // podejmij decyzje jaka to liczba
    // wyswietl odpowiedni komentarz
}

function wypisz(){
    var liczba1 = document.getElementById("pole1").value;
    var liczba2 = document.getElementById("pole2").value;
    var napis = "";

    for(i=liczba1; i<=liczba2; i++){
        napis = napis + i + " ";
    }
    
    document.getElementById("wynik2").innerHTML = napis;

}