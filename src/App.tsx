import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { MovieDetails } from './pages/MovieDetails'

function App() {
  return (
    <div id="center">
      <Routes>
        {/* Главная страница  /) */}
        <Route path="/" element={<Home />} />
        
        {/* Детали фильма ) */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App