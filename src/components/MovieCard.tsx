import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
  onToggle: (id: number) => void;
}

export const MovieCard = ({ movie, onToggle }: Props) => {
  return (
    <article style={{ 
      borderBottom: '1px solid #eee', 
      padding: '15px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      opacity: movie.watched ? 0.6 : 1 
    }}>
      <div>
        <h2 style={{ 
          margin: 0, 
          fontSize: '20px',
          textDecoration: movie.watched ? 'line-through' : 'none' 
        }}>
          {movie.title} ({movie.year})
        </h2>
        <p style={{ margin: '5px 0 0 0', color: '#666' }}>{movie.description}</p>
      </div>

      {/* Чекбокс «Просмотрено» */}
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input 
          type="checkbox" 
          checked={movie.watched} 
          onChange={() => onToggle(movie.id)} 
        />
        <span>Просмотрено</span>
      </label>
    </article>
  );
};