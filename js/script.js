"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже бачили', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Який із останніх побачених фільмів?', ''),
//     b = prompt('На скільки його оціните?', ''),
//     c = prompt('Який із останніх побачених фільмів?', ''),
//     d = prompt('На скільки його оціните?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Який із останніх побачених фільмів?', '');
    const b = prompt('На скільки його оціните?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     const a = prompt('Який із останніх побачених фільмів?', '');
//     const b = prompt('На скільки його оціните?', '');
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


// let i = 0;
// do { const a = prompt('Який із останніх побачених фільмів?', '');
// const b = prompt('На скільки його оціните?', '');
// i++;
// if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
// } else {
//     console.log('error');
//     i--;
// }

// }
// while (i < 2)







if (personalMovieDB.count < 10) {
    console.log('Переглянуто доволі багато фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
} else {
    console.log('Виникла помилка');
}





console.log(personalMovieDB);
console.log('h');
console.log('h');