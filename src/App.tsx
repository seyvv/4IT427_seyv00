import FilmCard from "./components/FilmCard";
import { useWatchlist } from "./context/WatchlistContext";

function App() {
  const { films, handleToggleWatched, removeFilm, markAllAsWatched } = useWatchlist();

  return (
    <>
      <h1>Film Watchlist</h1>

      <button onClick={markAllAsWatched}>Mark All as Watched</button>

      <div>
        {films.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}
            title={film.title}
            year={film.year}
            genre={film.genre}
            rating={film.rating}
            watched={film.watched}
            onToggleWatched={handleToggleWatched}
            onRemove={removeFilm}
          />
        ))}
      </div>

    </>
  );
}

export default App
