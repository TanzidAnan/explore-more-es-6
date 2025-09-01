const products =[
    {id:1, name:'lenovo', price:65000},
    {id:2, name:'dell', price:45000},
    {id:3, name:'hp', price:10000},
    {id:4, name:'mec', price:40000},
];

const names =products.map(product =>product.name);
console.log(names)