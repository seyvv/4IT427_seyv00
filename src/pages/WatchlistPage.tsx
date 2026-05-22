import styles from "../App.module.css";
import FilmCard from "../components/FilmCard";
import { useWatchlist } from "../context/WatchlistContext";
import { useEffect } from "react";

export function WatchlistPage() {

    const { films, isLoading, isError, error, refetchFilms, handleToggleWatched, removeFilm, markAllAsWatched } = useWatchlist();

    const watchedCount = films.filter((film) => film.watched).length;
    const totalCount = films.length;

    useEffect(() => {
        document.title = `Watchlist ${watchedCount} / ${totalCount} zhlédnuto`;
    }, [films]);

    if (isLoading) {
        return <p>Načítám…</p>;
    }

    if (isError) {
        return (
            <div>
                <p>{error?.message ?? 'Něco se pokazilo při načítání filmů.'}</p>
                <button onClick={refetchFilms}>Zkusit znovu</button>
            </div>
        );
    }

    return (
        <main>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Film Watchlist</h1>
                    <p className={styles.subtitle}>
                        Spravuj filmy, které chceš vidět, a označuj ty zhlédnuté.
                    </p>
                    <p className={styles.stats}>
                        {watchedCount} / {totalCount} zhlédnuto
                    </p>

                </header>

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