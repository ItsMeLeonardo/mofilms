import { useNetworkState } from "./useNetworkState";
import actorService from "services/actors";
import { Result } from "services/actors/search/types";

export const useActorSearch = () => {
  const { data, meta, actions } = useNetworkState<Result[]>();
  const { isLoading, error } = meta;

  const search = async ({ keyword }) => {
    try {
      actions.startRequest();
      const { results } = await actorService.search(keyword);
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
