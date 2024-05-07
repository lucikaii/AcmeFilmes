const atoresDAO = require('../model/DAO/atores.js')
const config = require('../modulo/config.js')

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

module.exports = {
    getListarAtores
}