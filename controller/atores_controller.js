const atoresDAO = require('../model/DAO/atores.js')
const config = require('../modulo/config.js')
const sexoDAO = require('../model/DAO/sexo.js')

const getListarAtores = async function(){

    let jsonAtores = {}

    let dadosAtores = await atoresDAO.selectAllAtores()

    if(dadosAtores){

        if(dadosAtores.length > 0){

            jsonAtores.atores = dadosAtores
            jsonAtores.quantidade = dadosAtores.length
            jsonAtores.status_code = 200
            return jsonAtores

        } else{
            return config.ERROR_NOT_FOUND
        }

    } else{
        return config.ERROR_INTERNAL_SERVER_DB
    }

}

const getBuscarAtor = async function(idAtor){

    let jsonAtor = {}

    let dadosAtor = await atoresDAO.selectByIdAtor(idAtor)

    if (dadosAtor) {

        if (dadosAtor.length > 0) {

            jsonAtor.ator = dadosAtor
            jsonAtor.quantidade = dadosAtor.length
            jsonAtor.status_code = 200
            return jsonAtor
            
        } else {
            return config.ERROR_NOT_FOUND
        }
        
    } else {
        return config.ERROR_INTERNAL_SERVER_DB
    }

}

module.exports = {
    getListarAtores,
    getBuscarAtor
}