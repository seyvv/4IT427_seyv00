import FilmCard from "./components/FilmCard";

const films = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 9,
    watched: true,
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8,
    watched: false,
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 9,
    watched: true,
  },
];


function App() {

  const handleToggleWatched = (title: string) => {
    console.log(`Změna stavu filmu ${title}`);
  }

  return (
    <>
      <h1>Film Watchlist</h1>
      <div>
        {films.map((film) => (
          <FilmCard
            key={film.title}
            title={film.title}
            year={film.year}
            genre={film.genre}
            rating={film.rating}
            watched={film.watched}
            onToggleWatched={handleToggleWatched}
          />
        ))}
      </div>

    </>
  );
}

export default App
