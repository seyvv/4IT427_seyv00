import { useState, useEffect } from "react";
import type { Film } from "../types/film.types";

export function useWatchlist(initialFilms: Film[]) {
    const [films, setFilms] = useState(initialFilms);

    const handleToggleWatched = (title: string) => {
        setFilms((prevFilms) =>
            prevFilms.map((film) =>
                film.title === title ?
                    { ...film, watched: !film.watched }
                    : film
            )
        );
    };

    useEffect(() => {
        const watchedCount = films.filter((film) => film.watched).length;
        const totalCount = films.length;

        document.title = `Watchlist ${watchedCount} / ${totalCount} zhlédnuto`;
    }, [films]);

    const markAllAsWatched = () => {
        setFilms((prevFilms) =>
            prevFilms.map((film) => ({
                ...film,
                watched: true,
            }))
        );
    };

    return {
        films,
        handleToggleWatched,
        markAllAsWatched,
    };
}

