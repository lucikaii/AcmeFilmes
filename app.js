// Para realizar a integração com o banco de daods, precisamos de uma biblioteca.
// Sequelize
// Prisma ORM
// Fastfy ORM

/********************************** IMPORT DOS ARQUIVOS INTERNOS DO PROJETO ****************************************************** */
const filmesController = require('./controller/filmes_controller.js')

/********************************************************************************************************************************* */


const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')



const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())
    
    next()
})

// Retorna os dados do banco de dados
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

app.listen(5080, function(){
    console.log('API está funcionando, aguarde um segundinho...')
})

//npx prisma migrate dev
