function add(number1,number2)
{
  sum=number1+number2;
  return sum;
}
function subtract(number1,number2)
{
    sub=number1-number2;
    
    return sub;
}
function multiplication(number1,number2)
{
    multiplication=number1*number2;
    return multiplication;
}

resultAdd = add(5,7)


tekstlist = document.getElementsByClassName("tekst"); 
tekstelement = tekstlist[0];
tekstelement.innerHTML = (resultAdd);

resultSub = subtract (7,5)


resultMult = multiplication(5,7);

contenerForNumber = [resultAdd,resultSub,resultMult]

console.log(contenerForNumber[0])
console.log(contenerForNumber[1])
console.log(contenerForNumber[2])
console.log("-------------------")
var index
for(index=0;index<contenerForNumber.length;index++)
{
    if(contenerForNumber[index] == 35)
    {
        console.log("znalazlem")
    }
}
if(resultMult > 20)
{
    console.log("dużo");
}
else if(resultAdd <10)
{
    console.log("mało")
}
else
{
    console.log("brak danych")
}

 today = new Date ();
 hourNow = today.getHours ();
var greeting;

if (hourNow > 18) {
     greeting = 'Dobry wieczór!';
 } else if (hourNow > 12) {
     greeting = 'Dzień dobry!';
 } else if (hourNow > 0) {
     greeting = 'Dobra noc!';
 } else {
     greeting = 'Witamy!';
 }
 document.write('<h3>' + greeting + '</h3>');
