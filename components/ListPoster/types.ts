import { Result as PopularResult } from "services/movies/popular/types";

export interface ListPosterProps {
  overlayPosition?: "top" | "bottom" | "left" | "right";
}

export interface PosterDataProps {
  votes: number;
  releaseDate: string;
  rate: number;
  id: number | string;
  overview: string;
}

export interface PosterSlotItemProps {
  movie: PopularResult;
  isSelected: boolean;
}

export interface PosterSlotProps {
  movies: PopularResult[];
  movieSelected: PopularResult;
  onClick: (movie: PopularResult) => void;
}
