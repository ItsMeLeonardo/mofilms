export interface ActorPopularResponse {
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
  known_for_department: KnownForDepartment;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface KnownFor {
  adult?: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  original_language: OriginalLanguage;
  original_title?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  name?: string;
  origin_country?: OriginCountry[];
  original_name?: string;
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

export enum OriginCountry {
  GB = "GB",
  Tr = "TR",
  Us = "US",
}

export enum OriginalLanguage {
  En = "en",
  Ko = "ko",
  Tr = "tr",
}

export enum KnownForDepartment {
  Acting = "Acting",
}
