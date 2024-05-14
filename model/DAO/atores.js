const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

const selectAllAtores = async function(){

    try {
        
        let sql = 'SELECT * FROM tbl_ator'
        let rsAtores = await prisma.$queryRawUnsafe(sql)
        return rsAtores
    } catch (error) {
        return false
    }
}

const selectByIdAtor = async function(idAtor){

    try {
        let sql = `SELECT * FROM tbl_ator WHERE id = ${idAtor}`
        let rsAtor = await prisma.$queryRawUnsafe(sql)
        return rsAtor
    } catch (error) {
        return false
    }
}

module.exports = {
    selectAllAtores,
    selectByIdAtor
}