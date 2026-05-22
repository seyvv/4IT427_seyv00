import styles from "./FilmCard.module.css";

interface FilmCardProps {
    id: string;
    title: string;
    year: number;
    genre: string;
    rating: number;
    watched: boolean;
    onToggleWatched: (id: string) => void;
    onRemove: (id: string) => void;
}

function FilmCard({ id, title, year, genre, rating, watched, onToggleWatched, onRemove }: FilmCardProps) {
    return (
        <article className={`${styles.card} ${watched ? styles.watched : ""}`}>
            <h2 className={styles.title}>{title}</h2>

            <p className={styles.meta}>Rok: {year}</p>
            <p className={styles.meta}>Žánr: {genre}</p>
            <p className={styles.meta}>Hodnocení: {rating}/10</p>
            <p className={styles.meta}>
                Stav: {watched ? "Zhlédnuto" : "Nezhlédnuto"}
            </p>

            {watched && <span className={styles.badge}>✓ Zhlédnuto</span>}

            <div className={styles.actions}>
                <button
                    className={styles.button}
                    onClick={() => onToggleWatched(id)}
                >
                    Změnit stav
                </button>

                <button
                    className={`${styles.button} ${styles.removeButton}`}
                    onClick={() => onRemove(id)}
                >
                    Odebrat
                </button>
            </div>
        </article>
    );
}

export default FilmCard;
