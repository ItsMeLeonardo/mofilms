import useSWR from "swr";

import actorService from "services/actors";

export const useActorSearch = ({ keyword }: { keyword: string }) => {
  const keywordIsValid = keyword.length > 2;

  const { data, error, isValidating } = useSWR(
    keywordIsValid ? `actor/search${keyword}` : null,
    () => actorService.search(keyword)
  );

  return {
    data,
    error,
    isLoading: isValidating,
  };
};
