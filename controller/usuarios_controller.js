const usuariosDAO = require('../model/DAO/usuarios.js')
const config = require('../modulo/config.js')

// GET USUARIOS 
const getListarUsuarios = async function(){

    let jsonUsuarios = {}

    let dadosUsuarios = await usuariosDAO.selectAllUsuarios()

    if (dadosUsuarios){

        if(dadosUsuarios.length > 0){

            jsonUsuarios.usuarios = dadosUsuarios
            jsonUsuarios.quantidade = dadosUsuarios.length
            jsonUsuarios.status_code = 200
            return jsonUsuarios
        } else {
            return config.ERROR_NOT_FOUND
        }
    } else{
        return config.ERROR_INTERNAL_SERVER_DB
    }
}

const getBuscarUsuario = async function(id){

    idUsuario = parseInt(id)
    let usuarioJson = {}

    if(idUsuario == '' || idUsuario == undefined || isNaN(idUsuario)){

        return config.ERROR_INVALID_ID
    } else {

        let dadosUsuario = await usuariosDAO.selectByIdUsuarios(idUsuario)

        if(dadosUsuario){

            if(dadosUsuario.length > 0){

                usuarioJson.usuario = dadosUsuario
                usuarioJson.status_code = 200
            } else {
                return config.ERROR_NOT_FOUND
            }
        } else{
            return config.ERROR_INTERNAL_SERVER_DB
        }
    }
}

// DELETE USUARIOS
const setExcluirUsuario = async function(id){

    let idUsuario = parseInt(id)

    try {
        
        if(idUsuario == '' || idUsuario == undefined || isNaN(idUsuario || idUsuario == null)){
            return config.ERROR_REQUIRED_FIELDS
        } else{

            let dadosUsuario = await usuariosDAO.deleteUsuario(idUsuario)
        }
    } catch (error) {
        return config.ERROR_INTERNAL_SERVER
    }
}



module.exports = {
    getListarUsuarios,
    getBuscarUsuario
}