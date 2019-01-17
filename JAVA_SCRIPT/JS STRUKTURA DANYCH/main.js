//Isuess_1
//let clothes = ['dress' , 'blouse' , 'skirt' , 'trousers' , 'coat' ,'knitwear' , 'dancewear']
 //console.log(clothes)
//clothes.length()
//clothes.pop()
//console.log(clothes)
//clothes.index ('longskirt' ,'shortskirt')
//console.log(clothes)

//practic
//const a = [1,2,3]
//const b = a.map(n => n*2)
// funkcja strzałkowa

//Isuess_2
//let names = [ 'Arek' , 'Darek' , 'Czarek' , 'Mariusz' , 'MArek', 'Wiesław' , 'Aneta' , 'Stanisław'];
//let fullNames = names.map (name => {
//    if(name.slice(-1) ==='a'){
//        return '${name} Kowalska';
//        }
//        return '${name} Kowalski';
//});
//console.log(fullNames);

//fullNames.forEach ( fullNames => {
//    if (fullName.includes('rek')) {
//       console.log(fullName); 
//    }
//})
// koniec
//a.reduce((prev , el) => {
//    debugger;
//    return prev+el;
//})

//const b = [ 'Sonia','Justyna'];
//b.reduce((prev, name) => {
//    prev[name] = Math.floor(Math.random() *25);

//})
// nie dokończone


let names = [ 'Arek' , 'Darek' , 'Czarek' , 'Mariusz' , 'MArek', 'Wiesław' , 'Aneta' , 'Stanisław'];
let fullNames = names.map (name => {
    if(name.slice(-1) ==='a'){
        return '${name} Kowalska';
        }
        return '${name} Kowalski';
});
console.log(fullNames);

fullNames.forEach ( fullNames => {
    if (fullNames.includes('rek')) {
       console.log(fullNames); 
    }
})
 // map and left only firstName
 const test = fullNames.map(fullName => fullName.split(' ')[0])
 // filter in firstName < 6
 .filter(firstName => firstName.length < 6)
 // reduce all firNames
 .reduce((prev, firstName) => prev + firstName.length, 0);
console.log(test);
