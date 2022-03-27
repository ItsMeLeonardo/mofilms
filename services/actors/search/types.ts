export interface ActorSearchResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  gender: number;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: null | string;
}

export interface KnownFor {
  backdrop_path?: null | string;
  first_air_date?: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  name?: string;
  origin_country?: string[];
  original_language: OriginalLanguage;
  original_name?: string;
  overview: string;
  poster_path: null | string;
  vote_average: number;
  vote_count: number;
  adult?: boolean;
  original_title?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

export enum OriginalLanguage {
  En = "en",
  Ko = "ko",
  Zh = "zh",
}
