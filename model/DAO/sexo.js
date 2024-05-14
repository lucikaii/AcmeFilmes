const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

const selectSexoById = async function(idSexo){

    try {
        let sql = `SELECT * FROM tbl_sexo WHERE id = ${idSexo}`

        let rsSexo = await prisma.$queryRawUnsafe(sql)
        return rsSexo
    } catch (error) {
        return false
    }
}

module.exports = {
    selectSexoById
}