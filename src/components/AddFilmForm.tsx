import { useWatchlist } from "../context/WatchlistContext";
import { useState } from "react";
import styles from "./AddFilmForm.module.css";
import { useNavigate } from "react-router-dom";

export function AddFilmForm() {
    const { addFilm } = useWatchlist();

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addFilm({ title, year: Number(year), genre, rating: Number(rating), watched: false });
        setTitle("");
        setYear("");
        setGenre("");
        setRating("");

        navigate("/");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
                <span className={styles.label}>Název filmu</span>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Např. Inception"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <label className={styles.field}>
                <span className={styles.label}>Rok</span>
                <input
                    className={styles.input}
                    type="number"
                    placeholder="2010"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </label>

            <label className={styles.field}>
                <span className={styles.label}>Žánr</span>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Sci-Fi"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </label>

            <label className={styles.field}>
                <span className={styles.label}>Hodnocení</span>
                <input
                    className={styles.input}
                    type="number"
                    placeholder="1–10"
                    min="1"
                    max="10"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </label>

            <button className={styles.button} type="submit">
                Přidat film
            </button>
        </form>
    );
}