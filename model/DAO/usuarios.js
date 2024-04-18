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

const insertNovoUsuario = async function(dadosUsuario){

    try {

        let sql
        let idSQL

        if(dadosUsuario.foto_perfil = null || dadosUsuario.foto_perfil == undefined || dadosUsuario == ''){

            sql = `INSERT INTO tbl_usuario (nome, email, senha, foto_perfil) VALUES
            (
                '${dadosUsuario.nome}',
                '${dadosUsuario.email}',
                '${dadosUsuario.senha}',
                null
            )`
    
            idSQL = `SELECT cast(id AS DECIMAL) FROM tbl_usuario ORDER BY id DESC LIMIT 1`
        } else {
    
            sql = `INSERT INTO tbl_usuario (nome, email, senha, foto_perfil) VALUES
            (
                '${dadosUsuario.nome}',
                '${dadosUsuario.email}',
                '${dadosUsuario.senha}',
                '${dadosUsuario.foto_perfil}'
            )`
    
            idSQL = `SELECT cast(id AS DECIMAL) FROM tbl_usuario ORDER BY id DESC LIMIT 1`
        }
    
        let result = prisma.$executeRawUnsafe(sql)
        let idResult = await prisma.$queryRawUnsafe(idSQL)
    
        if(result && idResult){
            return result, idResult
        } else {
            return false
        }
        
    } catch (error) {
        return false
    }

}
// PUT DE USUARIOS



module.exports = {
    selectAllUsuarios,
    selectByIdUsuarios,
    deleteUsuario,
}
