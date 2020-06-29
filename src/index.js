let homePage = require('./homePage')
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales');
let contacto = require('./contacto');
let preguntasFrecuentes = require('./preguntasFrecuentes');

let index ={

//HOMEPAGE

    homePage: function(res){

        //Titulo
        res.write(homePage.titulo +'\n \n');

        //Cantidad de peliculas
        res.write("Total: " + homePage.cantidad() + '\n \n');

        //Lista de peliculas alfabeticamente
        let titulos = homePage.listarPelis();
        for (titulo of titulos) {
            res.write(titulo)
            res.write('\n')
        }

        //Pie de pagina
        res.write('\n')
        res.write('Recorda que podes visitar las secciones: \n \n')
        res.write('En Carteleta \n')
        res.write('Mas Votadas \n')
        res.write('Sucursales \n')
        res.write('Contacto \n')
        res.write('Preguntas Frecuentes')
        res.end()
    },

//en-cartelera

    enCartelera: function(res){

        //Titulo
        res.write(enCartelera.titulo +'\n \n');

        //Cantidad de peliculas
        res.write("Total: " + homePage.cantidad() + ' \n');

        //Peliculas con sus reseñas
        let movies = enCartelera.leerJSON();
        movies.movies.forEach(function(datos){
            res.write("____________________________________________________________________________________________________________________________________________________________________________\n")
            res.write("\n")
            res.write("Titulo: " + datos.title)  
            res.write("\n")
            res.write("Reseña: ")                                       
            res.write(datos.overview)           
            res.write("\n")
            res.write("____________________________________________________________________________________________________________________________________________________________________________\n \n")
        })
        res.end();
    },

//mas-votadas

    masVotadas: function(res){

        //Titulo
        res.write(masVotadas.titulo +'\n \n');

        //Cantidad de peliculas
        res.write(`Total: ${masVotadas.cantidad()}\n \n`);

        //Rating promedio
        res.write(`Promedio de Ratings: ${masVotadas.ratingPromedio()} \n`);

        //Rating y reseña
        let pelis = masVotadas.listarPelis();     
        pelis.forEach(function(datos){
            res.write("____________________________________________________________________________________________________________________________________________________________________________\n")
            res.write("\n")
            res.write("Titulo: " + datos.title)             
            res.write("\n")
            res.write("Rating: " + datos.vote_average)      
            res.write("\n")
            res.write("Reseña: ")                                                         
            res.write(datos.overview)                       
            res.write("\n")
            res.write("____________________________________________________________________________________________________________________________________________________________________________\n \n")
        })
        res.end();
    },

//sucursales

    sucursales: function(res){

        //Titulo
        res.write(sucursales.titulo +'\n \n');

        //Cantidad de salas
        res.write("Total: " + sucursales.cantidadSalas() + '\n');

        //Nombre, Direccion y Descripcion
        let salas = sucursales.leerJSON();           
        salas.theaters.forEach(function(datos){
        res.write("____________________________________________________________________________________________________________________________________________________________________________\n")
        res.write("\n")
        res.write("Nombre: " + datos.name)              
        res.write("\n")
        res.write("Direccion: " + datos.address)        
        res.write("\n")
        res.write("Descripcion: ")                                                       
        res.write(datos.description)                   
        res.write("\n")
        res.write("____________________________________________________________________________________________________________________________________________________________________________\n \n")
        })
        res.end();
    },

//contacto

    contacto: function(res){

        //Titulo
        res.write(contacto.titulo + "\n \n")

        //Contacto
        res.write("-" + contacto.contenido + "\n \n")
        res.end();

    },

//preguntas-frecuentes
    
    preguntasFrecuentes: function(res){

        //Titulo
        res.write(preguntasFrecuentes.titulo + "\n \n")

        //Total de preguntas
        res.write("Total de preguntas: " + preguntasFrecuentes.cantidadPreguntas() + "\n")

        //Preguntas y respuestas
        let preguntas = preguntasFrecuentes.leerJSON();
        preguntas.faqs.forEach(function(PyR){
            res.write("____________________________________________________________________________________________________________________________________________________________________________\n")
            res.write("\n")
            res.write("Pregunta: " + PyR.faq_title)
            res.write("\n")
            res.write("Respuesta: " + PyR.faq_answer)
            res.write("\n")
            res.write("____________________________________________________________________________________________________________________________________________________________________________\n \n")
        })
        res.end();
    }
}
module.exports = index