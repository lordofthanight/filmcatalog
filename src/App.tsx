import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { movies as initialMovies } from "./data/movies"

function App() {
  // 1. Состояние для списка фильмов (Критерий: useState)
  const [movieList, setMovieList] = useState(initialMovies);

  // 2. Функция очистки (Критерий: кнопка работает)
  const handleClear = () => {
    setMovieList([]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Кинотека</h1>

      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* 3. Счётчик (Критерий: реализован счётчик) */}
        <div className="counter">
          Фильмов в списке: <strong>{movieList.length}</strong>
        </div>
        
        <button 
          onClick={handleClear}
          style={{ 
            padding: '8px 16px', 
            cursor: 'pointer',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        >
          Очистить список
        </button>
      </div>

      {/* 4. Вывод списка напрямую (Критерий: передача данных в интерфейс) */}
      <div style={{ textAlign: 'left' }}>
        {movieList.length > 0 ? (
          movieList.map(movie => (
            <div key={movie.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
              <h2 style={{ margin: '0 0 5px 0' }}>{movie.title} ({movie.year})</h2>
              <p style={{ margin: 0, color: '#666' }}>{movie.description}</p>
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