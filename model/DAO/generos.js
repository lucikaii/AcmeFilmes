const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

// GET GENEROS

const selectAllGeneros = async function(){

    try {
        
        let sql = 'SELECT * FROM tbl_genero'
        let rsGeneros = await prisma.$queryRawUnsafe(sql)
        return rsGeneros
    } catch (error) {
        return false
    }
}

const selectByIdGenero = async function(idGenero){

    try {
        
        let sql = `SELECT * FROM tbl_genero WHERE id = ${idGenero}`
        let rsGenero = await prisma.$queryRawUnsafe(sql)
        return rsGenero
    } catch (error) {
        return false
    }
}


module.exports = {
    selectAllGeneros,
    selectByIdGenero
}