import { MovieDetailResponse } from "services/movies/details/types";

export interface MovieOptionsProps {
  poster: string;
  homepage: string;
}
export interface MovieDataProps {
  movie: MovieDetailResponse;
}

export interface MovieCardProps {
  id: number | string;
}
