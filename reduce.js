const numbers = [1, 3, 63, 52, 45, 74, 14, 65];

// const total = numbers.reduce((previous, current) => previous+ current, 0);
const total = numbers.reduce((previous, current) => {
    const sum =previous + current;
    return sum
}, 0);
console.log(total)