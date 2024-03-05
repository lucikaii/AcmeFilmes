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
const ERROR_INVALID_NAME = {status: false, status_code: 400, message: 'Nome Inválido'}
const ERROR_REQUIRED_FIELDS = {status: false, status_code: 400, message: 'LARGA DE SER TROUXA E FAZ DIREITO'}

                                                            /** MENSAGEM DE SUCESSO */

const SUCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Sucesso ao inserir dados'}



module.exports ={
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB,
    ERROR_INVALID_NAME,
    ERROR_REQUIRED_FIELDS,
    SUCESS_CREATED_ITEM
}