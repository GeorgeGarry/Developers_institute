const users = {
  user1: { age: 44, name: 'picard', },
  user2: { age: 12, name: 'sisko', },
  user3: { age: 109, name: 'janeway',},
}
// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map
// [
//   {id:'user1',age:44, name: 'picard'},
//   {id:'user3',age:109, name: 'janeway'}
// ]


let users_keys = Object.keys(users);

const adults = users_keys
.filter(key => users[key].age > 30)
.map(id => ({id, ...users[id]}))
console.log(adults);

