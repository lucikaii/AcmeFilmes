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

module.exports = {
    getListarClassificacoes,
    getBuscarClassificacao
}