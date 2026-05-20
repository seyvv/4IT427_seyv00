interface FilmCardProps {
    title: string,
    year: number,
    genre: string,
    rating: number,
    watched: boolean,
    onToggleWatched: (title: string) => void
}

function FilmCard({ title, year, genre, rating, watched, onToggleWatched }: FilmCardProps) {
    return (
        <div className="film-card">
            <h2>{title}</h2>
            <p>Year: {year}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}/10</p>
            {watched && <span className="badge">✓ Zhlédnuto</span>}
            <button onClick={() => onToggleWatched(title)}>Změnit stav zhlédnutí</button>
        </div>
    );
}

export default FilmCard;
