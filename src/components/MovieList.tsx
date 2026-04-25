import { Movie } from "../types/movie";

interface Props {
  movies: Movie[];
}

export const MovieList = ({ movies }: Props) => {
  return (
    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
      {movies.map(movie => (
        <article key={movie.id} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
          <h2 style={{ margin: 0, fontSize: '20px' }}>{movie.title} ({movie.year})</h2>
          <p style={{ color: 'var(--text)', fontSize: '14px' }}>{movie.description}</p>
        </article>
      ))}
    </div>
  );
};