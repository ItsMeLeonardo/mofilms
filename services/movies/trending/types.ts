export interface MoviesTrendingResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  original_language: OriginalLanguage;
  original_title: string;
  poster_path: string;
  video: boolean;
  vote_average: number;
  id: number;
  overview: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  genre_ids: number[];
  title: string;
  popularity: number;
  media_type: MediaType;
}

export enum MediaType {
  Movie = "movie",
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
  Sv = "sv",
}
