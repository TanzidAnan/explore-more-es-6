const products =[
    {id:1, name:'lenovo', price:65000},
    {id:2, name:'dell', price:45000},
    {id:3, name:'hp', price:110000},
    {id:4, name:'mec', price:40000},
];

class Product {
    country ='bangladesh'
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo =new Product();
console.log(lenovo);
lenovo.speak('oba kita kau')