/*********************************************************************************************************
 * Objetivo: arquivo responsável por realizar validações, consistências e regra de negócios para os filmes
 * Data: 30/01/2024
 * Autor: Kainan
 * Versão: 1.0.2024
 * 
 * */

const filmesDAO = require('../model/DAO/filmes.js')
const config = require('../modulo/config.js')

// Function para inserir um novo Filme
const setInserirNovoFilme = async function(){

}


// Function para atualizar um filme
const setAtualizarFilme = async function(){

}


// Function para excluir um filme
const setExcluirFilme = async function(){

}


// Function para listar todos os filmes existentes no banco de dados
const getListarFilmes = async function(){

    let jsonFilmes = {}

    let dadosFilmes = await filmesDAO.selectAllFilmes()

    if(dadosFilmes){
        
        jsonFilmes.filmes = dadosFilmes
        jsonFilmes.quantidade = dadosFilmes.length
        jsonFilmes.status_code = 200
        return jsonFilmes
    } else{
        return false
    }
}


// Function para retornar o filtro de um filme pelo id
const getBuscarFilme = async function(id){

    let idFilme = id
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

    if (nomeFilme =='' || nomeFilme == undefined ){

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



module.exports = {

    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme,
    getBuscarFilmePorNome
}