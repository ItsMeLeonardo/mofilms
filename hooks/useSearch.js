import { useNetworkState } from "./useNetworkState";
import movieService from "../services/movies";
import actorService from "../services/actors";

/**
 *
 * @param {String} type can by `movie` | `actor`
 * @returns
 */
export const useSearch = (type) => {
  const { data, meta, actions } = useNetworkState();
  const { isLoading, error } = meta;

  const search = async ({ keyword }) => {
    try {
      if (type !== "movie" && type !== "actor") {
        throw new Error(
          "Search type is required, should be either `movie` or `actor`"
        );
      }

      const response =
        type === "movie"
          ? movieService.search(keyword)
          : actorService.search(keyword);

      actions.startRequest();
      const { results } = await response;
      actions.setRequestData(results);
      actions.endRequest();
    } catch (error) {
      actions.setError(error);
      actions.endRequest();
    } finally {
      actions.endRequest();
    }
  };

  return { data, search, isLoading, error };
};
