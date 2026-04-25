import { useState } from 'react'
import './App.css'
import { movies as initialMovies } from "./data/movies"

function App() {
  const [movieList, setMovieList] = useState(initialMovies);

  // Функция для переключения чекбокса (Критерий: handleToggleWatched)
  const handleToggleWatched = (id: number) => {
    setMovieList(movieList.map(movie => 
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    ));
  };

  const handleClear = () => {
    setMovieList([]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Кинотека</h1>

      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="counter">
          Фильмов в списке: <strong>{movieList.length}</strong>
        </div>
        
        <button 
          onClick={handleClear}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Очистить список
        </button>
      </div>

      <div style={{ textAlign: 'left' }}>
        {movieList.length > 0 ? (
          movieList.map(movie => (
            <div key={movie.id} style={{ 
              borderBottom: '1px solid #eee', 
              padding: '10px 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ opacity: movie.watched ? 0.5 : 1 }}>
                <h2 style={{ 
                  margin: '0 0 5px 0', 
                  textDecoration: movie.watched ? 'line-through' : 'none' 
                }}>
                  {movie.title} ({movie.year})
                </h2>
                <p style={{ margin: 0, color: '#666' }}>{movie.description}</p>
              </div>

              {/* Чекбокс (Критерий: Добавлен чекбокс) */}
              <input 
                type="checkbox" 
                checked={movie.watched} 
                onChange={() => handleToggleWatched(movie.id)}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            </div>
          ))
        ) : (
          <p>Список пуст</p>
        )}
      </div>
    </div>
  )
}

export default App