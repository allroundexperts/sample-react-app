import React from "react";
import { Autocomplete, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useGetMovies from "../../hooks/useGetMovies";
import { Movie } from "../../types/movie";
import SearchInput from "../SearchInput";

const MovieSearchBar: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const { data, loading } = useGetMovies(false, value);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          No result found for your query
        </Alert>
      </Snackbar>
      <Autocomplete
        value=""
        onChange={(event, newValue) => {
          if (!newValue) return null;
          if (typeof newValue === "string") {
            const foundMovie = (data as Movie[]).find(
              ({ title }) => title.toLowerCase() === newValue.toLowerCase()
            );
            foundMovie
              ? navigate(`/detail/${foundMovie.slug}`)
              : setShowSnackbar(true);
          } else {
            navigate(`/detail/${newValue.slug}`);
          }
        }}
        loading={loading}
        options={data as Movie[]}
        getOptionLabel={(movie) =>
          typeof movie === "string" ? movie : movie.title
        }
        sx={{ width: 300, "& .MuiInputBase-root": { padding: "0px 10px" } }}
        freeSolo
        onInputChange={(e, v) => setValue(v)}
        inputValue={value}
        renderInput={(params) => <SearchInput {...params} />}
      />
    </React.Fragment>
  );
};

export default MovieSearchBar;
