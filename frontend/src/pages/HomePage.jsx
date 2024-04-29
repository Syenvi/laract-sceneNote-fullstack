import MovieCard from "../components/fragments/MovieCard";
import { useFetchMovies } from "../services/movie/useFetchMovies";
const HomePage = () => {
  const { data, isLoading } = useFetchMovies();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {isLoading
        ? "Loading"
        : data?.data?.data?.map((movie, id) => (
            <MovieCard movie={movie} key={id} />
          ))}
    </div>
  );
};

export default HomePage;
