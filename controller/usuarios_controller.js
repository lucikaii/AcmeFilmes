const usuariosDAO = require('../model/DAO/usuarios.js')
const config = require('../modulo/config.js')


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



module.exports = {
    getListarUsuarios
}