class ShopCard {
    constructor(){
        this.products = [];
    }
    addItemTocard(product){
        this.products.push(product);
    }

    removeItemToCard(index){
        this.products.splice(index, 1);
    }
    checkProducts(){
        // sprawdź fo var in !!!!
     this.products.forEach((product) => {
         console.log(product.type, product.price)
         //console.log(product)
         if (product.sound) {
             product.makeSound()
        
         }
         if (product.ringTone){
             product.ringTone()
         }
     })

     /*
        for( let i = 0; i < this.products.length; i++){
            if(this.products[i] == sound){
                this.products[i].makeSounds();
            }
            if ([i] == ringTone){
                return makeCall();
            }
        }
        */
    }
}

class Product {
    constructor(type, name, prise){
        this.type = type;
        this.name = name;
        this.price = prise;
    }
}

class Toy extends Product {
    constructor(type, name, prise, sound){
        super(type, name, prise)
        this.sound = sound;
    }
    makeSounds(){
        console.log(this.sound +"działa jak natura chciała");
    }  
}
class Phone extends Product {
    constructor(type, name, prise, ringTone){
        super(type, name, prise,)
        this.ringTone = ringTone;
    }
    makeCall(){
        console.log(this.ringTone +"działa");
    }
}

const shopCard = new ShopCard();
const Phone1 = new Phone("Samsung","Galaxy 7", 3.500);
const Phone2 = new Phone("IPHONE","7", 4.500);
const Toy1 = new Toy("Lalka", "Barbie", 150);
const Toy2 = new Toy("Samochód", "mały", 50 );

shopCard.addItemTocard(Phone1);
shopCard.addItemTocard(Phone2);
shopCard.addItemTocard(Toy1);
shopCard.addItemTocard(Toy2);

shopCard.checkProducts();



/*
 Utworzyć metodę koszyka checkProducts która będzie console.logowała typ produktu, nazwę oraz jego cenę i wywoływała dostępne metody tego produktu

*/
 
