const numbers = [5, 3, 6, 5, 9, 7, 8, 5, 21];

const doubles = [];

for (const num of numbers) {
    const double = num * 2;
    doubles.push(double)
};

// console.log(doubles)

function doubleIt(num) {
    return num * 2;
}

const result = numbers.map(doubleIt )