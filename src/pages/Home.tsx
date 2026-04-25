import { useState } from 'react'
import { Link } from 'react-router-dom'
import { movies as initialMovies } from "../data/movies"

export const Home = () => {
  const [movieList, setMovieList] = useState(initialMovies);

  const handleToggleWatched = (id: number) => {
    setMovieList(movieList.map(m => m.id === id ? { ...m, watched: !m.watched } : m));
  };

  return (
    <div>
      <h1>Кинотека</h1>
      <p>Всего фильмов: {movieList.length}</p>
      <div style={{ textAlign: 'left' }}>
        {movieList.map(movie => (
          <div key={movie.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              {/* Клик на название ведет на страницу фильма (Критерий: Link) */}
              <Link to={`/movie/${movie.id}`} style={{ fontSize: '20px', fontWeight: 'bold', textDecoration: 'none', color: 'var(--accent)' }}>
                {movie.title} ({movie.year})
              </Link>
            </div>
            <input 
              type="checkbox" 
              checked={movie.watched} 
              onChange={() => handleToggleWatched(movie.id)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};