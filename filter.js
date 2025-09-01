// filter selects elements based on a condition and returns an array with the elements that fulfilled the 

const numbers = [1, 3, 63, 52, 45, 74, 14, 65];

// const filters =numbers.filter(p =>p>50);

const selected = numbers.filter(p => p % 2 === 0);
// console.log(selected)

// console.log(filters)

const friends =['Tom','john','Micheal','Oliver'];

const OddFriends =friends.filter(friend => friend.length >4)
console.log(OddFriends)

