import React from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../types/movie";

type Props = {
  movie: Movie;
};

const MovieSliderItem: React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ width: 345, height: 345, cursor: "pointer", marginBottom: 1.25 }}
      onClick={() => navigate(`/detail/${movie.slug}`)}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" height="200" image={movie.backdrop} />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "10px",
          }}
        >
          <Typography variant="h5">{movie.title}</Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {movie.overview.length > 215
            ? `${movie.overview.slice(0, 212)}...`
            : movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieSliderItem;
