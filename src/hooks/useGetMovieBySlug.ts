import useGetMovies from "./useGetMovies";
import { Movie } from "../types/movie";

const useGetMovieBySlug = (movieSlug: string) => {
  const { data, error, loading } = useGetMovies(false);
  return {
    loading,
    error,
    data: (data as Movie[]).find(({ slug }) => slug === movieSlug),
  };
};

export default useGetMovieBySlug;
