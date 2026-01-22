const express = require ('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'eneba'

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