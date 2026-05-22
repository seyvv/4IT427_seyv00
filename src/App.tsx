/* Stylingová metoda: CSS Modules */
import styles from "./App.module.css";

import FilmCard from "./components/FilmCard";
import { useWatchlist } from "./context/WatchlistContext";
import { AddFilmForm } from "./components/AddFilmForm";
import { useEffect, useState } from "react";

function App() {
  const { films, handleToggleWatched, removeFilm, markAllAsWatched } = useWatchlist();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const watchedCount = films.filter((film) => film.watched).length;
  const totalCount = films.length;

  useEffect(() => {
    document.title = `Watchlist ${watchedCount} / ${totalCount} zhlédnuto`;
  }, [films]);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <main className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Film Watchlist</h1>
          <p className={styles.subtitle}>
            Spravuj filmy, které chceš vidět, a označuj ty zhlédnuté.
          </p>
          <p className={styles.stats}>
            {watchedCount} / {totalCount} zhlédnuto
          </p>

          <button
            className={styles.secondaryButton}
            onClick={toggleDarkMode}
          >
            <span className={styles.themeIcon} aria-hidden="true">
              {isDarkMode ? "☀️" : "🌙"}
            </span>

            {isDarkMode ? "Světlý režim" : "Tmavý režim"}
          </button>


        </header>

        <AddFilmForm />

        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={markAllAsWatched}
          >
            Označit vše jako zhlédnuté
          </button>
        </div>

        <div className={styles.grid}>
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
      </div>
    </main>
  );
}

export default App
