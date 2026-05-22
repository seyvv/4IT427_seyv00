import type { Film } from '../types/film.types';
import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchFilms } from '../api/films';

type NewFilm = Omit<Film, 'id'>;

type WatchlistContextValue = {
    films: Film[];
    addFilm: (film: NewFilm) => void;
    removeFilm: (id: string) => void;
    handleToggleWatched: (id: string) => void;
    markAllAsWatched: () => void;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetchFilms: () => void;
};

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

export function WatchlistProvider({ children }: { children: ReactNode }) {
    const {
        data: serverFilms = [],
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery<Film[], Error>({
        queryKey: ['films'],
        queryFn: fetchFilms,
    });

    const [clientFilms, setClientFilms] = useState<Film[]>([]);

    useEffect(() => {
        if (serverFilms.length > 0 && clientFilms.length === 0) {
            setClientFilms(serverFilms);
        }
    }, [serverFilms, clientFilms.length]);

    const addFilm = (film: NewFilm) => {
        const newFilm: Film = {
            ...film,
            id: Date.now().toString(),
        };

        setClientFilms((prevFilms) => [...prevFilms, newFilm]);
    };

    const removeFilm = (id: string) => {
        setClientFilms((prevFilms) =>
            prevFilms.filter((film) => film.id !== id)
        );
    };

    const handleToggleWatched = (id: string) => {
        setClientFilms((prevFilms) =>
            prevFilms.map((film) =>
                film.id === id
                    ? { ...film, watched: !film.watched }
                    : film
            )
        );
    };

    const markAllAsWatched = () => {
        setClientFilms((prevFilms) =>
            prevFilms.map((film) => ({
                ...film,
                watched: true,
            }))
        );
    };

    return (
        <WatchlistContext.Provider
            value={{
                films: clientFilms,
                isLoading,
                isError,
                error,
                refetchFilms: refetch,
                addFilm,
                removeFilm,
                handleToggleWatched,
                markAllAsWatched,
            }}
        >
            {children}
        </WatchlistContext.Provider>
    );
}

export function useWatchlist() {
    const context = useContext(WatchlistContext);

    if (context === null) {
        throw new Error('useWatchlist must be used inside WatchlistProvider');
    }

    return context;
}