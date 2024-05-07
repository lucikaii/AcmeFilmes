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


module.exports = {
    selectAllGeneros
}