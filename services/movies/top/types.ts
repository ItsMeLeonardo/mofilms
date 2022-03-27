export interface MovieTopResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Fr = "fr",
  Ja = "ja",
}

type sortByTypes =
  | "popularity.asc"
  | "popularity.desc"
  | "release_date.asc"
  | "release_date.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "original_title.asc"
  | "original_title.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc";

export interface MovieTopParams {
  language?: string;
  region?: string;
  sort_by?: sortByTypes;
  page?: number;
  year?: string;
  certification_country?: string;
  certification?: string;
  include_adult?: boolean;
  include_video?: boolean;
  primary_release_year?: number;
  whit_cast?: string;
  with_watch_monetization_types?: string;
}
