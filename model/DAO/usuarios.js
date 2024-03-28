const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

const selectAllUsuarios = async function(){

    try {
        
        let sql = 'SELECT * FROM tbl_usuario'
        let rsUsuarios = await prisma.$queryRawUnsafe(sql)
        return rsUsuarios

    } catch (error) {
        return false
    }
}


module.exports = {
    selectAllUsuarios
}
