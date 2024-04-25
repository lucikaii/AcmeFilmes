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

const selectAllClassificacoes = async function(){

    try {

        let sql = 'SELECT * FROM tbl_classificacao'
        let rsClassificacoes = await prisma.$queryRawUnsafe(sql)

        return rsClassificacoes
        
    } catch (error) {
        return false
    }
}

module.exports = {

    selectAllClassificacoes
}