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

    let idUsuario = parseInt(id)

    try {

         let sql = `SELECT * FROM tbl_usuario WHERE id = ${idUsuario}`
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

        if(dadosUsuario.adm == 0){

            let sql = `INSERT INTO tbl_usuario (nome, email, senha, adm) VALUES
            (
                '${dadosUsuario.nome}',
                '${dadosUsuario.email}',
                '${dadosUsuario.senha}',
                0
            )`
        } else if(dadosUsuario.adm == 1){

            let sql = `INSERT INTO tbl_usuario (nome, email, senha, adm) VALUES
            (
                '${dadosUsuario.nome}',
                '${dadosUsuario.email}',
                '${dadosUsuario.senha}',
                1
            )`
        }
    
        let idSQL = `SELECT cast(id AS DECIMAL) FROM tbl_usuario ORDER BY id DESC LIMIT 1`

    
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
    insertNovoUsuario
}
