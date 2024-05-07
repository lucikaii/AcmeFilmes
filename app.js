// Para realizar a integração com o banco de daods, precisamos de uma biblioteca.
// Sequelize
// Prisma ORM
// Fastfy ORM

/********************************** IMPORT DOS ARQUIVOS INTERNOS DO PROJETO ****************************************************** */
const filmesController = require('./controller/filmes_controller.js')
const usuariosController = require('./controller/usuarios_controller.js')
const classificacoesController = require('./controller/classificacoes_controller.js')
const generosController = require('./controller/generos_controller.js')
const atoresController = require('./controller/atores_controller.js')

/********************************************************************************************************************************* */


const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const bodyParser = require('body-parser')
const res = require('express/lib/response.js')



const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    
    next()
})

const jsonBodyParser = bodyParser.json()

// RETORNO DOS DADOS DOS FILMES
app.get('/v1/acmefilmes/filmes', cors(), async function(request, response, next){

    let dadosFilmes = await filmesController.getListarFilmes()
    
    if(dadosFilmes){
        response.json(dadosFilmes)
        response.status = 200
    } else{
        response.json({message: 'Nada Encontrado'})
        response.status(404)
    }
})

app.get('/v1/acmefilmes/filme/:id', cors(), async function(request, response, next){

    let idFilme = request.params.id

    let dadosFilme = await filmesController.getBuscarFilme(idFilme)

    response.status(dadosFilme.status_code)
    response.json(dadosFilme)

})

app.get('/v1/acmefilmes/filtro/filme', cors(), async function(request, response, next){

    let nomeFilme = request.query.nome 
    let dadosFilmeNome = await filmesController.getBuscarFilmePorNome(nomeFilme)

    response.status(dadosFilmeNome.status_code)
    response.json(dadosFilmeNome)
})

app.post('/v2/acmefilmes/filme', cors(), jsonBodyParser, async function(request, response, next){

    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDados = await filmesController.setInserirNovoFilme(dadosBody, contentType)

    response.status(resultDados.status_code)
    response.json(resultDados)
} )

app.delete('/v2/acmefilmes/filme/:id', cors(), async function(request, response, next){

    let idFilme = request.params.id

    let dadosFilme = await filmesController.setExcluirFilme(idFilme)

    response.status(200)
    response.json(dadosFilme)
})

// RETORNO DOS DADOS DOS USUARIOS
app.get('/v2/acmefilmes/usuarios', cors(), async function(request, response, next){

    let dadosUsuarios = await usuariosController.getListarUsuarios()

    if(dadosUsuarios){
        response.json(dadosUsuarios)
        response.status = 200
    } else{
        response.json({message: 'Nada Encontrado'})
        response.status(404)
    }
})

app.get('/v2/acmefilmes/usuario/:id', cors(), async function (resquest, response, next){

    let idUsuario = resquest.params.id

    let dadosUsuario = await usuariosController.getBuscarUsuario(idUsuario)

    response.status(dadosUsuario.status_code)
    response.json(dadosUsuario)
})

app.post('/v2/acmefilmes/usuario', cors(), jsonBodyParser, async function(request, response, next){

    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDados = await usuariosController.setInserirNovoUsuario(dadosBody, contentType)
    response.status(resultDados.status_code)
    response.json(resultDados)
})


//RETORNO DOS DADOS CLASSIFICAÇÃO
app.get('/v2/acmefilmes/classificacoes', cors(), async function(request, response, next){

    let dadosClassificacoes = await classificacoesController.getListarClassificacoes()

    if(dadosClassificacoes){
        response.json(dadosClassificacoes)
        response.status = 200
    } else{
        response.json({message: 'Nada Encontrado'})
        response.status(404)
    }
})

app.get('/v2/acmefilmes/classificacao/:id', cors(), async function(request, response, next){

    let idClassificacao = request.params.id

    let dadosClassificacao = await classificacoesController.getBuscarClassificacao(idClassificacao)

    response.status(dadosClassificacao.status_code)
    response.json(dadosClassificacao)
})

// RETORNO DOS DADOS DE GENERO
app.get('/v2/acmefilmes/generos', cors(), async function(request, response, next){

    let dadosGeneros = await generosController.getListarGeneros()

    if(dadosGeneros){
        response.json(dadosGeneros)
        response.status = 200
    } else{
        response.json({message: 'Nada Encontrado'})
        response.status(404)
    }
})

// RETORNO DOS DADOS DE ATOR

app.get('/v2/acmefilmes/atores', cors(), async function(request, response, next){

    let dadosAtores = await atoresController.getListarAtores()
    if(dadosAtores){
        response.json(dadosAtores)
        response.status = 200
    } else{
        response.json({message: 'Nada Encontrado'})
        response.status(404)
    }
})



app.listen(8080, function(){
    console.log('API está funcionando, aguarde um segundinho...')
})

//npx prisma migrate dev
