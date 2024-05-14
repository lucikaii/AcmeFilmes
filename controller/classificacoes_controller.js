/*********************************************************************************************************
 * Objetivo: arquivo responsável por realizar validações, consistências e regra de negócios para os filmes
 * Data: 30/01/2024
 * Autor: Kainan
 * Versão: 1.0.2024
 * 
 * */

const classificacoesDAO = require('../model/DAO/classificacao.js')
const config = require('../modulo/config.js')

const getListarClassificacoes = async function(){

    let jsonClassificacoes = {}

    let dadosClassificacoes = await classificacoesDAO.selectAllClassificacoes()

    if(dadosClassificacoes){

        if(dadosClassificacoes.length > 0){
            jsonClassificacoes.classificacoes = dadosClassificacoes
            jsonClassificacoes.quantidade = dadosClassificacoes.length
            jsonClassificacoes.status_code = 200
            return jsonClassificacoes
        } else{
            return config.ERROR_NOT_FOUND
        }
    } else{
        return config.ERROR_INTERNAL_SERVER_DB
    }
}

const getBuscarClassificacao = async function(id){

    let idClassificacao = parseInt(id)
    let jsonClassificacao = {}

    if(idClassificacao == '' || idClassificacao == undefined || isNaN(idClassificacao)){

        return config.ERROR_INVALID_ID
    } else{

        let dadosClassificacao = await classificacoesDAO.selectByIdClassificacoes(idClassificacao)

        if (dadosClassificacao) {
            
            if (dadosClassificacao.length > 0) {
                
                jsonClassificacao.classificacao = dadosClassificacao
                jsonClassificacao.status_code = 200

                return jsonClassificacao
            } else {
                return config.ERROR_NOT_FOUND
            }
        } else {
            return config.ERROR_INTERNAL_SERVER_DB
        }
    }
}

const setInserirNovaClassificacao = async function(dadosClassificacao, contentType){

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            let statusValidate = false
            let jsonNovaClassificacao = {}

            if(dadosClassificacao.sigla == '' || dadosClassificacao.sigla == undefined || dadosClassificacao.sigla == null || dadosClassificacao.sigla.length > 2 ||
               dadosClassificacao.descricao == '' || dadosClassificacao.descricao == undefined || dadosClassificacao.descricao == null || dadosClassificacao.descricao.length > 150 ||
               dadosClassificacao.icone == '' || dadosClassificacao.icone == undefined || dadosClassificacao.icone == null || dadosClassificacao.icone.length > 300){

                return config.ERROR_REQUIRED_FIELDS
               } else{
                statusValidate = true
               }

               if(statusValidate){

                let novaClassificacao = await classificacoesDAO.insertNovaClassificacao(dadosClassificacao)

                if(novaClassificacao){
                    console.log(novaClassificacao)
                    jsonNovaClassificacao.status = config.SUCESS_CREATED_ITEM.status
                    jsonNovaClassificacao.status_code = config.SUCESS_CREATED_ITEM.status_code
                    jsonNovaClassificacao.message = config.SUCESS_CREATED_ITEM.message
                    jsonNovaClassificacao.classificacao = dadosClassificacao
                    jsonNovaClassificacao.id = dadosClassificacao.id
                    return jsonNovaClassificacao
                } else{
                    return config.ERROR_INTERNAL_SERVER_DB
                }
               }

        } else{
            return config.ERROR_CONTENT_TYPE
        }
        
    } catch (error) {
        return config.ERROR_INTERNAL_SERVER
    }
}



module.exports = {
    getListarClassificacoes,
    getBuscarClassificacao,
    setInserirNovaClassificacao
}