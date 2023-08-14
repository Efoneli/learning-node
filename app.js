// const http = require('http');
// const casual = require('casual'); 

// const server = http.createServer((req, res) => {
//     res.end(casual.city)
// });
// server.listen(4000, () => {
//     console.log('Server running on port 4000');
// })

// const names = [Christian, Esther, Lucky, Solomon, Sarah, Miracle]

const users = [
    {firstName: 'John', lastName: 'jack', age: 36},
    {firstName: 'jane', lastName: 'ade', age: 16},
    {firstName: 'Phil', lastName: 'Absalom', age: 23,},
    {firstName: 'May', lastName: 'Pei', age: 37,},
]

const newName = users.map(user => user.firstName + ' ' + user.age)
console.log(newName)