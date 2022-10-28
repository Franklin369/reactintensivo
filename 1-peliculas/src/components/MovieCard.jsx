import styles from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";
export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/"+movie.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className="movieImage"
        />
       
      </Link>
       <div className={styles.title}>{movie.title}</div>
    </li>
  );
}
