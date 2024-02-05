// pages/index.tsx
"use client";
import { useEffect, useState } from 'react';
import MovieList from '@/components/MovieList';

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies'); // Update with your actual API route
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Welcome to My Movie App</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
