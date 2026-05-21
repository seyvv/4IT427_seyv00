import FilmCard from "./components/FilmCard";
import { useWatchlist } from "./hooks/useWatchlist";
import type { Film } from "./types/film.types";

export const initialFilms: Film[] = [
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
  const { films, handleToggleWatched, markAllAsWatched } = useWatchlist(initialFilms);

  return (
    <>
      <h1>Film Watchlist</h1>

      <button onClick={markAllAsWatched}>Mark All as Watched</button>

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
