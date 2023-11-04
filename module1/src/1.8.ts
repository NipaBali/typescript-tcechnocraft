
{

// Destructuring

const user = {
    id: 456,
    name: {
        first: 'nipa',
        second: 'bali'
    },
    contactno: "01916939556",
    address: 'barisal'
}
const {contactno, name: {first : newFirst } } = user; 



// Array
const myFriends = ['one', 'two', 'third', 'four', 'five', 'six'];
const [ , , bestFriend , ...rest] = myFriends






}












