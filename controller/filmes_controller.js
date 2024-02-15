/*********************************************************************************************************
 * Objetivo: arquivo responsável por realizar validações, consistências e regra de negócios para os filmes
 * Data: 30/01/2024
 * Autor: Kainan
 * Versão: 1.0.2024
 * 
 * */

const filmesDAO = require('../model/DAO/filmes.js')

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
const getBuscarFilme = async function(){

}



module.exports = {

    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme
}