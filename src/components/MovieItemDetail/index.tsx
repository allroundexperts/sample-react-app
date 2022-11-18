import React from "react";
import { Box, Rating, Typography } from "@mui/material";
import { Movie } from "../../types/movie";

type Props = {
  movie: Movie;
};

const MovieDetailItem: React.FC<Props> = ({ movie }) => {
  return (
    <Box maxWidth={850} display="flex">
      <Box mr={3} maxWidth="340px">
        <img alt={movie.slug} src={movie.poster} />
      </Box>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Typography variant="h5" marginRight={1}>
              {movie.title}
            </Typography>
            <Typography fontWeight="bold">({movie.imdbRating} / 10)</Typography>
          </Box>
          <Rating value={movie.imdbRating / 2} readOnly precision={0.5} />
        </Box>
        <Box>
          <Typography fontWeight="bold">
            Released on: {movie.releasedOn}
          </Typography>
          <Typography fontWeight="bold">
            Movie length: {movie.length}
          </Typography>
          <Typography fontWeight="bold">Director: {movie.director}</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold">
            Cast: {movie.cast.join(", ")}
          </Typography>
        </Box>
        <Box>
          <Typography>{movie.overview}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetailItem;
