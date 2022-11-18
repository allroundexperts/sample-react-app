import React from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import StackedHeaderFooter from "../layouts/StackedHeaderFooter";
import useGetMovieBySlug from "../hooks/useGetMovieBySlug";
import MovieDetailItem from "../components/MovieItemDetail";

const MovieDetail: React.FC = () => {
  const { slug } = useParams();
  const { data, error, loading } = useGetMovieBySlug(slug || "");
  return (
    <StackedHeaderFooter>
      <Box display="flex" justifyContent="center" alignItems="center">
        {loading && <CircularProgress />}
        {error && <Typography variant="h5">Something went wrong.</Typography>}
        {data && <MovieDetailItem movie={data} />}
      </Box>
    </StackedHeaderFooter>
  );
};

export default MovieDetail;
