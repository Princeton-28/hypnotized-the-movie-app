// import section
import React from "react";
import styles from "./Movie.module.css";

// here we saved our API link in the variable "defaultPlaceholderImage"
const defaultPlaceholderImage =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// in this component we are passing "movie" as our prop and we are also saying if some movies retrieved from the API do not have images, we will render a placeholder image instead of a broken link. "N/A" means not available or not applicable
export default function Movie({ movie }) {
  const poster =
    movie.Poster === "N/A" ? defaultPlaceholderImage : movie.Poster;
  return (
    <div className={styles.movie}>
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>Year of Release: {movie.Year}</p>
      <p>Movie ID: {movie.imdbID}</p>
    </div>
  );
}
