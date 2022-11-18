import useFetch from "./useFetch";
import categorizeObject from "../utils/categorizeObject";
import { Movie } from "../types/movie";

const useGetMovies = (
  categorizeBy: keyof Movie | false = "genres",
  searchTerm?: string
) => {
  const { data, error, loading } = useFetch<Movie>(
    `movies${searchTerm ? `?q=${searchTerm}` : ""}`
  );

  return {
    loading,
    error,
    data: categorizeBy ? categorizeObject<Movie>(data, categorizeBy) : data,
  };
};

export default useGetMovies;
