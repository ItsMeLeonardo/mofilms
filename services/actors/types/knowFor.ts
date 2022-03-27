export interface KnownFor {
  adult?: boolean;
  backdrop_path: null | string;
  first_air_date?: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  name?: string;
  origin_country?: OriginCountry[];
  original_language: OriginalLanguage;
  original_name?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
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

export enum OriginCountry {
  GB = "GB",
  Tr = "TR",
  Us = "US",
}
