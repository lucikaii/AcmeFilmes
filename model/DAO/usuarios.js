const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()


// GET DE USUÁRIOS
const selectAllUsuarios = async function(){

    try {
        
        let sql = 'SELECT * FROM tbl_usuario'
        let rsUsuarios = await prisma.$queryRawUnsafe(sql)
        return rsUsuarios

    } catch (error) {
        return false
    }
}

const selectByIdUsuarios = async function(id){

    try {

         let sql = `SELECT * FROM tbl_usuario WHERE id = ${id}`
         rsUsuario = await prisma.$queryRawUnsafe(sql)

         return rsUsuario
    } catch (error) {
         return false
    }
}

// DELETE DE USUARIOS
const deleteUsuario = async function(id){

    let idUsuario = parseInt(id)

    try {
        
        let sql = `DELETE FROM tbl_usuario WHERE id = ${idUsuario}`
        let rsUsuario = await prisma.$queryRawUnsafe(sql)
        return rsUsuario
    } catch (error) {
        return false
    }
}

// POST DE USUARIOS


// PUT DE USUARIOS



module.exports = {
    selectAllUsuarios,
    selectByIdUsuarios,
    deleteUsuario,
}
