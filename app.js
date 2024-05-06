const mysql = require("mysql2")

const connection = mysql.createConnection({  

host:'sql10.freemysqlhosting.net',
user:'sql10701770',
password:'uh4Vi5Y7dZ',
database:'sql10701770'

})

connection.connect()

function inserir(lg,sn,mail){
    let sql = "insert into users set ?"
    let dados = {login:lg,senha:sn,email:mail}

    connection.query(sql,dados, function(error,results,fields){
        if(error) throw error
        console.log("Cadastro com sucesso")

    })
}

//Selecionar dados por id - select nometabela

function selecionaeTudo(id){
    connection.query(sql, id, function(error,results,fields){

    }



function selecionaeTudo(){
    let sql = "select * from users"
    connection.query(sql, id, function(error,results,fields){
       
        for(let i=0;i<results.length;i++){
     
            if(error) throw error
        console.log("Selecionado: " + results[i].id + ":" + results[i].login + ":" + results[i].email)
        }
    })
 
}

selecionaPorId()

inserir("Camila","9999","camila9@gmail.com")

connection.end()