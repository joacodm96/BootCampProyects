const movie1 = {
    name: "Iron Man",
    genre: "accion",
    ableTo: "+12",
    type: "feature film", // largometraje o cortometraje
    rating: 4,
    year: 2008,

    play: function() {
        console.log('play movie');
    },
    stop: function() {
        console.log('stop movie');

    },

}

const movie2 = {
    name: "The Pianist",
    genre: "drama",
    ableTo: "+16",
    type: "feature film",
    rating: 3,
    year: 2002,

    play: function() {
        console.log('play movie');
    },
    stop: function() {
        console.log('stop movie');

    },
}

const movie3 = {
    name: "Inglourious Basterds",
    genre: "warlike",
    ableTo: "+18",
    type: "feature film",
    rating: 4.5,
    year: 2009,

    play: function() {
        console.log('play movie');
    },
    stop: function() {
        console.log('stop movie');

    },

}
const movie4 = {
    name: "The Incredible Hulk",
    genre: "accion",
    ableTo: "+12",
    type: "feature film",
    rating: 4,
    year: 2008,

    play: function() {
        console.log('play movie');
    },
    stop: function() {
        console.log('stop movie');

    },

}
const movie5 = {
    name: "Gladietor",
    genre: "accion",
    ableTo: "+16",
    type: "feature film",
    rating: 4.7,
    year: 2000,

    play: function() {
        console.log('play movie');
    },
    stop: function() {
        console.log('stop movie');

    },

}

/// Creacion del Arreglo
const biblioMovies = [];
/// Pusheando las peliculas en mi Arreglo
biblioMovies.push(movie1, movie2, movie3, movie4, movie5);
/// Mostrando en la consola todas las peliculas
console.log('arreglo de peliculas', biblioMovies);

///Crear arreglo agrupado por genero (usando .map() y .filter())

//mapeo del arreglo por genero. Creando un arreglo nuevo unicamente con los generos
const genres = biblioMovies.map((movie) => { return movie.genre });
console.log('arreglo de generos', genres);

///usar filter() para filtrar por genero
const filteredMovies = {};

genres.forEach((genre) => {
    filteredMovies[genre] = biblioMovies.filter((movie) => {
        return movie.genre === genre;

    });

});

console.log('peliculas filtradas por genero', filteredMovies);