import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import StackedHeaderFooter from "../layouts/StackedHeaderFooter";
import useGetMovies from "../hooks/useGetMovies";
import MovieSlider from "../components/MovieSlider";
import { Movie } from "../types/movie";
import { decamelize } from "humps";

const Home: React.FC = () => {
  const { data, error, loading } = useGetMovies();
  const movies = data as Record<string, Movie[]>;
  return (
    <StackedHeaderFooter>
      <Box display="flex" justifyContent="center" alignItems="center">
        {loading && <CircularProgress />}
        {error && <Typography variant="h5">Something went wrong.</Typography>}
      </Box>
      {movies && (
        <Box>
          {Object.keys(movies).map((key) => (
            <Box key={key}>
              <Typography variant="h5">
                {decamelize(key, { separator: " " }).toUpperCase()}
              </Typography>
              <br />
              <MovieSlider movies={movies[key]} />
            </Box>
          ))}
        </Box>
      )}
    </StackedHeaderFooter>
  );
};

export default Home;
