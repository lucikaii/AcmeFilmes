/*********************************************************************************************************
 * Objetivo: arquivo responsável por realizar um CRUD no banco de dados MySQL
 * Data: 30/01/2024
 * Autor: Kainan
 * Versão: 1.0.2024
 * 
 * */

// Import da biblioteca do prima client
const { PrismaClient } = require('@prisma/client')

// Instanciando a classe do prisma client
const prisma = new PrismaClient()

// Function para inserir um filme no banco de dados
const insertFilme = async function(dadosFilme){

    try {

    let sql 
    let idSQL 

    if(dadosFilme.data_relancamento == null || dadosFilme.data_relancamento == undefined || dadosFilme.data_relancamento == ''){

        sql = `INSERT INTO tbl_filme (nome, sinopse, duracao, data_lancamento, data_relancamento, foto_capa, valor_unitario, classificacao) VALUES
               (
                '${dadosFilme.nome}',
                '${dadosFilme.sinopse}',
                 '${dadosFilme.duracao}',
                 '${dadosFilme.data_lancamento}',
                  null,
                 '${dadosFilme.foto_capa}',
                 '${dadosFilme.valor_unitario}'
               )
               `

               idSQL = `SELECT cast(id AS DECIMAL) FROM tbl_filme ORDER BY id DESC LIMIT 1`

    } else{

        sql = `INSERT INTO tbl_filme (nome, sinopse, duracao, data_lancamento, data_relancamento, foto_capa, valor_unitario, classificacao) VALUES
               (
                '${dadosFilme.nome}',
                '${dadosFilme.sinopse}',
                 '${dadosFilme.duracao}',
                 '${dadosFilme.data_lancamento}',
                 '${dadosFilme.data_relancamento}',
                 '${dadosFilme.foto_capa}',
                 '${dadosFilme.valor_unitario}
               )`

               idSQL = `SELECT cast(id AS DECIMAL) FROM tbl_filme ORDER BY id DESC LIMIT 1`

    }
    
    let result = await prisma.$executeRawUnsafe(sql)
    let idResult = await prisma.$queryRawUnsafe(idSQL)

    if(result && idResult){
        return result, idResult
    } else {
        return false
    }
        
    } catch (error) {
        
        return false
    }

}


// Function para atualizar um filme no banco de dados
const updateFilme = async function(dadosFilme){

    try {

        let sql 

        if(dadosFilme.data_relancamento == null || dadosFilme.data_relancamento == undefined || dadosFilme.data_relancamento == ''){

            sql = ``

        }else{

        }
        
    } catch (error) {
        return false
    }
}


// DELETE USUARIOS
const deleteFilme = async function(id){

    let idFilme = parseInt(id)

    try {

        let sql = `DELETE FROM tbl_filme WHERE id = ${idFilme}`
        let rsFilme = await prisma.$queryRawUnsafe(sql)
        return rsFilme
    } catch (error) {
        return false
    }
}

// GET DOS FILMES
const selectAllFilmes = async function(){

   try {
    
    let sql = 'SELECT * FROM tbl_filme'
    let rsFilmes = await prisma.$queryRawUnsafe(sql)

    return rsFilmes

   } catch (error) {

    return false
   }
    
}

const selectByIdFilmes = async function(id){    
    
    try {
        
        let sql = `SELECT * FROM tbl_filme WHERE id = ${id}`
        let rsFilme = await prisma.$queryRawUnsafe(sql)


        return rsFilme

    } catch (error) {
        return false
    }

}

const selectByNameFilmes = async function(name){

    try {
        
        let sql = `SELECT * FROM tbl_filme WHERE nome LIKE "%${name}%"`
        let rsFilmes = await prisma.$queryRawUnsafe(sql)

        return rsFilmes

    } catch (error) {
        
        return false
    }
}



module.exports = {

    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByNameFilmes,
    selectByIdFilmes
}