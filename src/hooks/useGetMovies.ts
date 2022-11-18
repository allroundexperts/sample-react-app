import { useEffect, useState } from "react";
import { debounce } from "@mui/material/utils";
import useFetch from "./useFetch";
import categorizeObject from "../utils/categorizeObject";
import { Movie } from "../types/movie";

const delay = debounce((cb) => cb(), 1000);

const useGetMovies = (
  categorizeBy: keyof Movie | false = "genres",
  searchTerm?: string
) => {
  const [search, setSearch] = useState(searchTerm);
  const { data, error, loading } = useFetch<Movie>(
    `movies${search ? `?q=${search}` : ""}`
  );

  useEffect(() => {
    delay(() => setSearch(searchTerm));
  }, [searchTerm]);

  return {
    loading,
    error,
    data: categorizeBy ? categorizeObject<Movie>(data, categorizeBy) : data,
  };
};

export default useGetMovies;
