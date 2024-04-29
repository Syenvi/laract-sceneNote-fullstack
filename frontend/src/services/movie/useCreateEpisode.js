import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const useCreateEpisode = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const moviesResponse = await axiosInstance.post(
        "/movies/createEpisode",
        body
      );
      return moviesResponse;
    },
    onSuccess,
  });
};
