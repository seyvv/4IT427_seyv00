import { useWatchlist } from "../context/WatchlistContext";
import { useState } from "react";

export function AddFilmForm() {
    const { addFilm } = useWatchlist();

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addFilm({ id: crypto.randomUUID(), title, year: Number(year), genre, rating: Number(rating), watched: false });
        setTitle("");
        setYear("");
        setGenre("");
        setRating("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <button
                type="submit"
            >
                Add Film
            </button>
        </form>
    );
}