/***************************************************************************************************************************************************************************************
 * OBJETIVO: Arquivo responsável pelas variaveis globais do projeto, onde haverão mensagens, status_code e outros conteúdos para o .
 * DATA: 20/02/2024
 * AUTOR: Kainan Braga
 * 
 ****************************************************************************************************************************************************************************************/

                                                              /** MENSAGENS DE ERRO  **/

const ERROR_INVALID_ID = {status: false, status_code: 400, message: 'ID Inválido'}
const ERROR_NOT_FOUND = {status: false, status_code: 404, message: 'Nenhum item encontrado'}
const ERROR_INTERNAL_SERVER_DB = {status: false, status_code: 500, message: 'Erro no Banco de Dados, Entre em contato com o administrador'}



module.exports ={
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB
}