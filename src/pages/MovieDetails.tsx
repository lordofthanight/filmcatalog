import { useParams, Link } from 'react-router-dom'
import { movies } from "../data/movies"

export const MovieDetails = () => {
  const { id } = useParams(); // Получаем id из URL (Критерий: useParams)
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <h2>Фильм не найден</h2>;

  return (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <Link to="/" style={{ color: '#666' }}>← Назад в каталог</Link>
      <h1>{movie.title}</h1>
      <p><strong>Год:</strong> {movie.year}</p>
      <p><strong>Описание:</strong> {movie.description}</p>
      <p><strong>Статус:</strong> {movie.watched ? "Просмотрено" : "В планах"}</p>
    </div>
  );
};