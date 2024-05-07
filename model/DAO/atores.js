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

module.exports = {
    selectAllAtores
}