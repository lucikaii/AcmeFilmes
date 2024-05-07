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


// POST DE USUARIOS
const setInserirNovoUsuario = async function(dadosUsuario, contentType){

    try {

        if (String(contentType).toLowerCase() == 'application/json') {

            let statusValidate = false
            let jsonNovoUsuario = {}

            if(dadosUsuario.nome =='' || dadosUsuario.nome == undefined || dadosUsuario.nome == null || dadosUsuario.nome.length > 80 ||
               dadosUsuario.email =='' || dadosUsuario.email == undefined || dadosUsuario.email == null || dadosUsuario.email.length > 100 ||
               dadosUsuario.senha =='' || dadosUsuario.senha == undefined || dadosUsuario.senha == null || dadosUsuario.senha.length > 15 ||
               dadosUsuario.adm =='' || dadosUsuario.adm == undefined || dadosUsuario.adm == null){
                return config.ERROR_REQUIRED_FIELDS
               } else{
                statusValidate = true
               }

               if(statusValidate = true){
                let novoUsuario = await usuariosDAO.insertNovoUsuario(dadosUsuario)

                if(novoUsuario){
                    jsonNovoUsuario.status = config.SUCESS_CREATED_ITEM.status
                    jsonNovoUsuario.status_code = config.SUCESS_CREATED_ITEM.status_code
                    jsonNovoUsuario.message = config.SUCESS_CREATED_ITEM.message
                    jsonNovoUsuario.usuario = dadosUsuario
                    jsonNovoUsuario.id = dadosUsuario.id
                    return jsonNovoUsuario
                } else{
                    return config.ERROR_INTERNAL_SERVER_DB
                }
               }

        } else {
            return config.ERROR_CONTENT_TYPE
        }
        
    } catch (error) {
        return config.ERROR_INTERNAL_SERVER
    }
}

// PUT DE USUARIOS


module.exports = {
    getListarUsuarios,
    getBuscarUsuario,
    setInserirNovoUsuario,
}