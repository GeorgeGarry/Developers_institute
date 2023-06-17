// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       port : 3306,
//       user : 'your_database_user',
//       password : 'your_database_password',
//       database : 'myapp_test'
//     }
//   });

const knex = require(`knex`);

const db = knex({
    client:`pg`,
    connection: {
        host:`lucky.db.elephantsql.com`,  //Localhost 127.0.0.1
        port:`5432`, 
        user:`ktldbzqu`, //postgress
        password:`MDf8kdHaFEHA0VUxrBYvq3ZsLvVPU7zJ`, // 123456
        database:`ktldbzqu` //dvdrental
    }
})

db(`products`)
.select(`id`,`name`,`price`)
.where ({id:2})
// .from(`products`)
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
});

// UPDATE
// db(`products`)
// .update({name:`iPad15`,price:2000})
// .where({id:2})
// .returning(`*`)
// .then(data =>{
//     console.log(data);
// })


// INSERT

// db(`products`)
// .insert(
//     [
//         {name:`iCar`, price: 150000},
//         {name: `iCoffee`, price:400}
//     ])
//     .returning(`*`)
//     .then(data =>{
//         console.log(data);
//     })

// DELETE

// db(`products`)
// .where({id:5})
// .del()  



// RAW
db.raw(`select * from products`)
.then(data => {
    console.log(data.names);
});


// INER JOIN
