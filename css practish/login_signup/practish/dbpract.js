// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'aniket@123',
//     database:'mydb'
// })
// con.connect((err)=>{
//     if(err) throw err;
//     console.log('database connected...');
//     const sql = 'CREATE TABLE abs (id int AUTO_INCREMENT PRIMARY KEY,NAME VARCHAR(55))';
//     con.query(sql,(err,res)=>{
//         if(err){
//             console.log('table already exist');
//         }else{
//             console.log('table crates');
//         }
//     })
// })



// const knex = require('knex')({
//     client:'mysql',
//     connection:{
//         host:'localhost',
//         user:'root',
//         password:'aniket@123',
//         database:'mydb'
//     }
// })
// knex.schema.createTable('n',(table)=>{
//     table.increments('id').primary()
//     table.string('name')
// }).then((result) => {
//    console.log('table crated done....'); 
// }).catch((err) => {
//     console.log('table allready exist....');
// });
