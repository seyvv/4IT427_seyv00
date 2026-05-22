import FilmCard from "./components/FilmCard";
import { useWatchlist } from "./context/WatchlistContext";
import { AddFilmForm } from "./components/AddFilmForm";
import { useEffect } from "react";

function App() {
  const { films, handleToggleWatched, removeFilm, markAllAsWatched } = useWatchlist();

  const watchedCount = films.filter((film) => film.watched).length;
  const totalCount = films.length;

  useEffect(() => {
    document.title = `Watchlist ${watchedCount} / ${totalCount} zhlédnuto`;
  }, [films]);

  return (
    <>
      <h1>Film Watchlist</h1>
      <p>
        {watchedCount} / {totalCount} zhlédnuto
      </p>

      <AddFilmForm />

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
