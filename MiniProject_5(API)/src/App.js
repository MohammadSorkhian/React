import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    const res = fetch("https://swapi.dev/api/films")
      .then(response => response.json())
      .then( res => res.results)
      .then ( moviesList => moviesList.map( m => {
        return {
          id: m.episode_id,
          title: m.title,
          openingText: m.opening_crawl,
          releaseDate: m.release_date
        }}))
      .then(res => setMovies(res))
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
