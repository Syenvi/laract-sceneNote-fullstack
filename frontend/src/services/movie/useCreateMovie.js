import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const useCreateMovie = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const moviesResponse = await axiosInstance.post("/movies", body);
      return moviesResponse;
    },
    onSuccess,
  });
};
