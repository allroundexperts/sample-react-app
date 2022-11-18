import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import MovieSliderItem from "../MovieSliderItem";
import { Movie } from "../../types/movie";

type Props = {
  movies: Movie[];
  slidesPerView?: number | "auto";
  spaceBetweenSlides?: number;
};

const MovieSlider: React.FC<Props> = ({
  movies,
  slidesPerView = "auto",
  spaceBetweenSlides = 30,
}) => {
  return (
    <Swiper slidesPerView={slidesPerView} spaceBetween={spaceBetweenSlides}>
      {movies.map((movie) => (
        <SwiperSlide style={{ width: "auto" }} key={movie.id}>
          <MovieSliderItem movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSlider;
