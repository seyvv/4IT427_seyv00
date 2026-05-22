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
        <div className="film-card">
            <h2>{title}</h2>
            <p>Year: {year}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}/10</p>
            {watched && <span className="badge">✓ Zhlédnuto</span>}
            <button onClick={() => onToggleWatched(id)}>Změnit stav zhlédnutí</button>
            <button onClick={() => onRemove(id)}>Odstranit</button>
        </div>
    );
}

export default FilmCard;
