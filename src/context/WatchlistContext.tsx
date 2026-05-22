import type { Film } from '../types/film.types';
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

const initialFilms: Film[] = [
    {
        id: "1",
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 9,
        watched: true,
    },
    {
        id: "2",
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 8,
        watched: false,
    },
    {
        id: "3",
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 9,
        watched: true,
    },
];

type WatchlistContextValue = {
    films: Film[];
    addFilm: (film: Film) => void;
    removeFilm: (id: string) => void;
    handleToggleWatched: (id: string) => void;
    markAllAsWatched: () => void;
}

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

type WatchlistProviderProps = {
    children: ReactNode;
    initialFilms: Film[];
};

export function WatchlistProvider({ children }: { children: ReactNode }) {
    const [films, setFilms] = useState<Film[]>(initialFilms);

    const addFilm = (film: Film) => {
        setFilms((prevFilms) => [...prevFilms, film]);
    };

    const removeFilm = (id: string) => {
        setFilms((prevFilms) => prevFilms.filter((film) => film.id !== id));
    };

    const handleToggleWatched = (id: string) => {
        setFilms((prevFilms) =>
            prevFilms.map((film) =>
                film.id === id ?
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

    return (
        <WatchlistContext.Provider value={{
            films,
            addFilm,
            removeFilm,
            handleToggleWatched,
            markAllAsWatched,
        }}>
            {children}
        </WatchlistContext.Provider>
    )
}

export function useWatchlist() {
    const context = useContext(WatchlistContext);

    if (context === null) {
        throw new Error("useWatchlist must be used inside WatchlistProvider");
    }

    return context;
}


