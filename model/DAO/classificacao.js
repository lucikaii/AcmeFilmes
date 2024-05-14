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

const selectByIdClassificacoes = async function(id){

    try {

        let sql = `SELECT * FROM tbl_classificacao WHERE id = ${id}`
        let rsClassificacoes = await prisma.$queryRawUnsafe(sql)

        return rsClassificacoes
        
    } catch (error) {
        return false
    }
}

const insertNovaClassificacao = async function(dadosClassificacao){

    try {

        let sql
        let idSQL

        sql = `INSERT INTO tbl_classificacao (sigla, descricao, icone) VALUES 
        (
            '${dadosClassificacao.sigla}',
            '${dadosClassificacao.descricao}',
            '${dadosClassificacao.icone}'
        )`

        idSQL = `SELECT cast(id AS DECIMAL) FROM tbl_classificacao ORDER BY id DESC`

        let result = await prisma.$executeRawUnsafe(sql)
        let idResult = await prisma.$queryRawUnsafe(idSQL)

        if (result && idResult) {
            return result, idResult
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

module.exports = {

    selectAllClassificacoes,
    selectByIdClassificacoes,
    insertNovaClassificacao
}