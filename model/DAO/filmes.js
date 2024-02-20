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
const insertFilme = async function(){

}


// Function para atualizar um filme no banco de dados
const updateFilme = async function(){

}


// Function para deletar um filme do banco de dados
const deleteFilme = async function(){

}


// Function para selecionar todos os filmes do banco de dados
const selectAllFilmes = async function(){

   try {
    
    let sql = 'SELECT * FROM tbl_filme'
    let rsFilmes = await prisma.$queryRawUnsafe(sql)

    return rsFilmes

   } catch (error) {

    return false
   }
    
}


// Functions para filtrar um filme do banco de dados
const selectByIdFilmes = async function(id){
    
    try {
        
        let sql = `SELECT * FROM tbl_filme WHERE id = ${id}`
        let rsFilme = await prisma.$queryRawUnsafe(sql)

        return rsFilme

    } catch (error) {
        
        return false
    }

}



module.exports = {

    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilmes
}