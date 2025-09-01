const products =[
    {id:1, name:'lenovo', price:65000},
    {id:2, name:'dell', price:45000},
    {id:3, name:'hp', price:110000},
    {id:4, name:'mec', price:40000},
];

const names =products.map(product =>product.name);
console.log(names)

// monos 10

// filter

const expensive =products.filter(p=>p.price >50000);
// console.log(expensive)


// find

const affordable =products.find(product => product.price>50000)
console.log(affordable);

// reduce

const total =products.reduce((p,c) => p+c.price,0);
console.log(total)