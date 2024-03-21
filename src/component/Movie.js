import React, { useState, useEffect } from "react";
import axios from "axios";
import IMAGES from '../assets/images'
function Movie() {
  const [movies, setMovies] = useState([
    {
      "id": 1,
      "title": "Example Movie",
      "release_date": "2022-01-20",
      "rating": 4.5,
      "image_url": [IMAGES.FTB1], // Placeholder image URL
      "video_url": "https://www.youtube.com/embed/your_video_id"
    },
    {
      "id": 2,
      "title": "Dunki",
      "release_date": "2022-01-20",
      "rating": 7.5,
      "image_url": [IMAGES.banner1], // Placeholder image URL
      "video_url": "https://www.youtube.com/embed/10ji9SDrOcQ"
    }
  ]);

  useEffect(() => {
    // You can choose to fetch data dynamically here if needed
    // axios.get("http://127.0.0.1:5000/movies")
    //   .then(response => setMovies(response.data))
    //   .catch(error => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.rating}</p>
            <img src={movie.image_url} alt={movie.title} style={{ maxWidth: "200px" }} />
            <iframe
              width="320"
              height="240"
              src={movie.video_url}
              title={movie.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
