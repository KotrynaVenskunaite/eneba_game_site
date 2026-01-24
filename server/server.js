require('dotenv').config();
console.log(process.env.DB_DATABASE)
const express = require ('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

app.get('/games',(req,res)=>{
    const sql = "SELECT * FROM games";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    });
})

app.get('/', (re, res)=> {
    return res.json("eneba_games");
})

app.listen(8081, () => {
    console.log("listening");
})