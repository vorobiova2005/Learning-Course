const title = document.getElementById("movie-title");
const genre = document.getElementById("movie-genre");
const description = document.getElementById("movie-description");
const img = document.getElementById("movie-img");
const btn = document.getElementById("random-movie-btn");
const nextbtn = document.getElementById("next-movie-btn");
const prevbtn = document.getElementById("prev-movie-btn");
const viewcounter = document.getElementById("view-counter");
const genrebtn = document.querySelectorAll(".genre-btn");

const movies = [
    {
        title: "Inception",
        genre: "Sci-Fi",
        description: "A thief enters dreams to steal secrets.",
        image: "resources/img/Inception.jpg"
    },
    {
        title: "Titanic",
        genre: "Romance",
        description: "A love story on a sinking ship.",
        image: "resources/img/Titanic.jpg"
    },
    {
        title: "The Dark Knight",
        genre: "Action",
        description: "Batman faces the Joker.",
        image: "resources/img/The_Dark_Knight.jpg"
    },
    {
        title: "Harry Potter",
        genre: "Fantasy",
        description: "A boy discovers he is a wizard.",
        image: "resources/img/Harry_Potter.jpg"
    },
    {
        title: "Forrest Gump",
        genre: "Drama",
        description: "The life journey of an extraordinary man.",
        image: "resources/img/Forrest_Gump.jpg"
    },
    {
        title: "The Matrix",
        genre: "Sci-Fi",
        description: "A hacker discovers the reality is a simulation.",
        image: "resources/img/The_Matrix.jpg"
    },
    {
        title: "Gladiator",
        genre: "Action",
        description: "A Roman general seeks revenge.",
        image: "resources/img/Gladiator.jpg"
    },
    {
        title: "The Lion King",
        genre: "Animation",
        description: "A young lion prince faces his destiny.",
        image: "resources/img/The_Lion_King.jpg"
    },
    {
        title: "Avatar",
        genre: "Sci-Fi",
        description: "Humans explore a distant planet.",
        image: "resources/img/Avatar.jpg"
    },
    {
        title: "Jurassic Park",
        genre: "Adventure",
        description: "Dinosaurs are brought back to life in a theme park.",
        image: "resources/img/Jurassic_Park.jpg"
    },
    {
        title: "The Godfather",
        genre: "Crime",
        description: "The story of a powerful mafia family.",
        image: "resources/img/The_Godfather.jpg"
    },
    {
        title: "Pirates of the Caribbean",
        genre: "Adventure",
        description: "A pirate captain searches for treasure.",
        image: "resources/img/Pirates_of_the_Caribbean.jpg"
    },
    {
        title: "Interstellar",
        genre: "Sci-Fi",
        description: "Astronauts travel through a wormhole to save humanity.",
        image: "resources/img/Interstellar.jpg"
    },
    {
        title: "La La Land",
        genre: "Musical",
        description: "Two artists chase their dreams in Los Angeles.",
        image: "resources/img/La_La_Land.jpg"
    }
];


let lastIndex = -1;
let currentIndex = 0

let counter = 0
let viewedMovies = []

let filteredMovie = [...movies]
let selectedGenre = 'All'

genrebtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedGenre = btn.dataset.genre
        if (selectedGenre === 'All'){
            filteredMovie = [...movies]
        } else {
            filteredMovie = movies.filter(movie => movie.genre === selectedGenre)
        }

        currentIndex = 0
        viewedMovies = []
        counter = 0
        viewcounter.textContent = `You viewed ${counter} movies`

        if (filteredMovie.length > 0){
            const movie = filteredMovie[currentIndex];
            title.textContent = movie.title;
            genre.textContent = movie.genre;
            description.textContent = movie.description;
            img.src = movie.image;
        }
    })
})


function getRandomMovie() {
    if (filteredMovie.length === 0) return;

    let randomIndex = Math.floor(Math.random() * filteredMovie.length);
    while (randomIndex === currentIndex) {
        randomIndex = Math.floor(Math.random() * filteredMovie.length);
    }
    currentIndex = randomIndex;
    const movie = filteredMovie[currentIndex];
    title.textContent = movie.title;
    genre.textContent = movie.genre;
    description.textContent = movie.description;
    img.src = movie.image;

    if (!viewedMovies.includes(currentIndex)) {
        counter++;
        viewedMovies.push(currentIndex);
        viewcounter.textContent = `You viewed ${counter} movies`;
    }
}


function nextFilm(){
    if (filteredMovie.length === 0) return;

    currentIndex ++;
    if (currentIndex >= filteredMovie.length) {
        currentIndex = 0;
    }

    const movie = filteredMovie[currentIndex];
    title.textContent = movie.title;
    genre.textContent = movie.genre;
    description.textContent = movie.description;
    img.src = movie.image;

    if (!viewedMovies.includes(currentIndex)) {
        counter++;
        viewedMovies.push(currentIndex);
        viewcounter.textContent = `You viewed ${counter} movies`;
    }
}


function prevFilm(){
    if (filteredMovie.length === 0) return;

    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = filteredMovie.length - 1;
    }

    const movie = filteredMovie[currentIndex];
    title.textContent = movie.title;
    genre.textContent = movie.genre;
    description.textContent = movie.description;
    img.src = movie.image;

    if (!viewedMovies.includes(currentIndex)) {
        counter++;
        viewedMovies.push(currentIndex);
        viewcounter.textContent = `You viewed ${counter} movies`;
    }
}



btn.addEventListener("click", getRandomMovie);
nextbtn.addEventListener("click", nextFilm)
prevbtn.addEventListener("click", prevFilm)


