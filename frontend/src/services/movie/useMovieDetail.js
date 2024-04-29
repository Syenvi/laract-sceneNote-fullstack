import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { useParams } from "react-router-dom";

export const useMovieDetail = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movie, episode } = useParams();
  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      if (movie && episode) {
        const movieResponse = await axiosInstance.get(
          `/movies/${movie}/episode/${episode}`
        );
        setMovies(movieResponse.data.data);
        setIsLoading(false);
      } else {
        const movieResponse = await axiosInstance.get(`/movies/${movie}`);
        setMovies(movieResponse.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    data: movies,
    isLoading,
  };
};
