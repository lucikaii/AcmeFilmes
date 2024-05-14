/*********************************************************************************************************
 * Objetivo: arquivo responsável por realizar validações, consistências e regra de negócios para os filmes
 * Data: 30/01/2024
 * Autor: Kainan
 * Versão: 1.0.2024
 * 
 * */

const filmesDAO = require('../model/DAO/filmes.js')
const classificacoesDAO = require('../model/DAO/classificacao.js')
const config = require('../modulo/config.js')

// Function para inserir um novo Filme
const setInserirNovoFilme = async function(dadosFilme, contentType){

    try {

    if (String(contentType).toLowerCase() == 'application/json'){

        let statusValidate = false
        let jsonNovoFilme = {}

    if(dadosFilme.nome == '' || dadosFilme.nome == undefined || dadosFilme.nome == null || dadosFilme.length > 80 ||
       dadosFilme.sinopse == '' || dadosFilme.sinopse == undefined || dadosFilme.sinopse == null || dadosFilme.sinopse.length > 65000 ||
       dadosFilme.duracao == '' || dadosFilme.duracao == undefined || dadosFilme.duracao == null || dadosFilme.duracao.length > 8 ||
       dadosFilme.data_lancamento == '' || dadosFilme.data_lancamento == undefined || dadosFilme.data_lancamento == null || dadosFilme.data_lancamento.length != 10 ||
       dadosFilme.foto_capa == '' || dadosFilme.foto_capa == undefined || dadosFilme.foto_capa == null || dadosFilme.foto_capa.length > 300 ||
       dadosFilme.classificacao == '' || dadosFilme.classificacao == undefined || dadosFilme.classificacao == null || isNaN(dadosFilme.classificacao) ||
       dadosFilme.valor_unitario.length > 8 || isNaN(dadosFilme.valor_unitario)
       ){

        return config.ERROR_REQUIRED_FIELDS
       } else{

        if(dadosFilme.data_relancamento != '' && dadosFilme.data_relancamento != null && dadosFilme.data_relancamento != undefined){

            if(dadosFilme.data_relancamento.length != 10){
                return config.ERROR_REQUIRED_FIELDS
            } else{

                statusValidate = true
            }
        } else {
             statusValidate = true
        }
       }

       if(statusValidate = true){


        let novoFilme = await filmesDAO.insertFilme(dadosFilme)
        console.log(novoFilme)


        if(novoFilme){

            jsonNovoFilme.status = config.SUCESS_CREATED_ITEM.status
            jsonNovoFilme.status_code = config.SUCESS_CREATED_ITEM.status_code
            jsonNovoFilme.message = config.SUCESS_CREATED_ITEM.message
            jsonNovoFilme.filme = dadosFilme
            jsonNovoFilme.id = dadosFilme.id
            return jsonNovoFilme
        } else {

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


// Function para atualizar um filme
const setAtualizarFilme = async function(){

}

// Function para excluir um filme
const setExcluirFilme = async function(id){

    let idFilme = parseInt(id)

    try {
          
        if(idFilme == "" || idFilme == undefined || isNaN(idFilme) || idFilme == null){
            return config.ERROR_REQUIRED_FIELDS
        } else {

            let dadosFilme = await filmesDAO.deleteFilme(idFilme)
        }

    } catch (error) {
        return config.ERROR_INTERNAL_SERVER
    }
}

// GET FILMES
const getListarFilmes = async function(){

    let jsonFilmes = {}

    let dadosFilmes = await filmesDAO.selectAllFilmes()

    if(dadosFilmes){

        if(dadosFilmes.length > 0){

            jsonFilmes.filmes = dadosFilmes
            jsonFilmes.quantidade = dadosFilmes.length
            jsonFilmes.status_code = 200
            return jsonFilmes
        } else {
            return config.ERROR_NOT_FOUND
        }
    } else{
        return config.ERROR_INTERNAL_SERVER_DB
    }
}

const getBuscarFilme = async function(id){

    let idFilme = parseInt(id)
    let filmeJson = {}

    if(idFilme == ''|| idFilme == undefined || isNaN(idFilme)){

        return config.ERROR_INVALID_ID 
    } else {

        let dadosFilme = await filmesDAO.selectByIdFilmes(idFilme)

        if(dadosFilme){

            if(dadosFilme.length > 0){

                filmeJson.filme = dadosFilme
                filmeJson.status_code = 200

                return filmeJson
            } else{
                 
                return config.ERROR_NOT_FOUND
            }
            
        } else{
            return config.ERROR_INTERNAL_SERVER_DB
        }
    }
}

const getBuscarFilmePorNome = async function(name){

    let nomeFilme = name 
    let filmesJson = {}

    if (nomeFilme =='' || nomeFilme == undefined || nomeFilme == null){

        return config.ERROR_INVALID_NAME
    } else{

        let dadosFilmes = await filmesDAO.selectByNameFilmes(nomeFilme)

        if(dadosFilmes){

            if(dadosFilmes.length > 0){

                filmesJson.filmes = dadosFilmes
                filmesJson.status_code = 200

                return filmesJson
            } else {

                return config.ERROR_NOT_FOUND
            }
        } else {

            return config.ERROR_INTERNAL_SERVER_DB
        }
    }
}

const getBuscarFilmePorClassificacao = async function(siglaClassificacao){

    let jsonFilmes = {}

    if(siglaClassificacao == '' || siglaClassificacao == undefined){
        return config.ERROR_INVALID_ID
    } else{

        let dadosFilmes = await filmesDAO.selectByClassificacaoFilmes(siglaClassificacao)

        if(dadosFilmes){

            if(dadosFilmes.length > 0){

                jsonFilmes.filmes = dadosFilmes
                jsonFilmes.status_code = 200
                return jsonFilmes

            }else{
                return config.ERROR_NOT_FOUND
            }

        }else{
            return config.ERROR_INTERNAL_SERVER_DB
        }
    }
}



module.exports = {

    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme,
    getBuscarFilmePorNome,
    getBuscarFilmePorClassificacao
}


