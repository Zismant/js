"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже бачили', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Який із останніх побачених фільмів?', ''),
    b = prompt('На скільки його оціните?', ''),
    c = prompt('Який із останніх побачених фільмів?', ''),
    d = prompt('На скільки його оціните?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);