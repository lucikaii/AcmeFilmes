var movies = require('../modulo/filmes.js')

function getFilmes(){

    const status = true

    const filmes = movies.filmes.filmes
    const arrayFilmes = []

    filmes.forEach( function (listaFilmes){
        
        arrayFilmes.push(listaFilmes)
    });

    const jsonFilmes = {filmes: arrayFilmes}


    if(status){
        return jsonFilmes
    } else{
        return false
    }
}

function getFilmesById(id){

    const status = false
    const filmes = movies.filmes.filmes
    const arrayFilmesId = []

   
    filmes.forEach( function(getFilmesById){

        if(getFilmesById.id == id){

            arrayFilmesId.push(getFilmesById)
        }

       
    })
    const jsonFilmesId = {filme: arrayFilmesId}

   console.log(jsonFilmesId)
    }




module.exports = {

    getFilmes,
    getFilmesById
}