import useSWR from "swr";

import movieService from "services/movies";

//types
type Props = { keyword: string };

export const useMovieSearch = ({ keyword }: Props) => {
  const isQueryValid = keyword.length >= 3;
  const { data, error } = useSWR(
    isQueryValid ? `movie/search/${keyword}` : null,
    () => movieService.search(keyword)
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
