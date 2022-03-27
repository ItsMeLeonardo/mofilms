import { useNetworkState } from "./useNetworkState";
import movieService from "services/movies";
import { Result } from "services/movies/search/types";

export const useMovieSearch = () => {
  const { data, meta, actions } = useNetworkState<Result[]>();
  const { isLoading, error } = meta;

  const search = async ({ keyword }) => {
    try {
      actions.startRequest();
      const { results } = await movieService.search(keyword);
      actions.setRequestData(results);
      actions.endRequest();
    } catch (err) {
      actions.setError(err.message);
      actions.endRequest();
    } finally {
      actions.endRequest();
    }
  };

  return { data, search, isLoading, error };
};
