const generosDAO = require('../model/DAO/generos.js')
const config = require('../modulo/config.js')

// GET GENEROS 
const getListarGeneros = async function(){

    let jsonGeneros = {}

    let dadosGeneros = await generosDAO.selectAllGeneros()

    if(dadosGeneros){

        if(dadosGeneros.length > 0){

            jsonGeneros.generos = dadosGeneros
            jsonGeneros.quantidade = dadosGeneros.length
            jsonGeneros.status_code = 200
            return jsonGeneros
            
        } else{
            return config.ERROR_NOT_FOUND
        }

    } else{
        return config.ERROR_INTERNAL_SERVER_DB
    }
}

module.exports = {
    getListarGeneros
}