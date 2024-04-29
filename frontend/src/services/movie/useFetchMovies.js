import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const useFetchMovies = () => {
  return useQuery({
    queryFn: async () => {
      const moviesResponse = await axiosInstance.get("/movies");
      return moviesResponse;
    },
    // refetchOnWindowFocus: false, saat ganti layar dan kembali focus merefetch lagi
  });
};
