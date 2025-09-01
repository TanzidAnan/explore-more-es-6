const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 110000 },
    { id: 4, name: 'mec', price: 40000 },
];

class Product {
    country = 'bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('le le lenovo');
// console.log(lenovo);
lenovo.speak('oba kita kau')


class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject
    }
    lecture() {
        console.log('Bangladesh')
    }
};

const tapan =new Teacher('Tapon sir','Bangla');
const rashid =new Teacher('Rashid sir','ICT');
console.log(tapan)
console.log(rashid)