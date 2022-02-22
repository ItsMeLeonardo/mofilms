import { useState } from "react";

export const useNetworkState = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const meta = { isLoading, error };
  const actions = {
    startRequest: () => setIsLoading(true),
    endRequest: () => setIsLoading(false),
    setError: (err) => setError(err),
    setRequestData: (data) => setData(data),
  };

  return { data, meta, actions };
};
