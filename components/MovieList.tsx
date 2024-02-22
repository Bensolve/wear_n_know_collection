// components/MovieList.tsx

interface Movie {
    // Define your movie type here based on your actual data structure
    _id:string;
    title: string;
    price: string;
  }
  
  interface MoviesProps {
    movies: Movie[];
  }
interface MoviesProps {
    movies: Array<{ title: string;  _id: string; price: string} & {}>;
  }
  const MovieList: React.FC<MoviesProps> = ({ movies }) => {
    return (
      <div className="bg-red-500">
        <h2 className="text-2xl">Top 10 Movies</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie._id}>
              {/* Display movie details here */}
              <h2>{movie.title}</h2>
              <p>{movie.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MovieList;
  