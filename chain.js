// Data access

const data =[{id:1, name:'abul',address:'Dhaka'}];
console.log(data[0].address);


const products ={
    count:5000,
    data:[
        {id:1,name:'lenovo laptop',price:65000},
        {id:2,name:'iphone',price:165000},
        {id:3,name:'hp laptop',price:61000},
    ]
}
// console.log(products.data[1].price)

const user ={
    id:5001,
    name:'Tanzid Anan',
    address:{
        street:{
            first:'54/1 uttor side',
            second:'poribag er goli',
            third:'no dorai'
        },
        city:'Dhaka'
    }
}

console.log(user.address?.street?.second)