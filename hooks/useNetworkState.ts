import { useState } from "react";

interface NetworkError {
  message?: string;
  hasError: boolean;
}

export const useNetworkState = <Data>() => {
  const [data, setData] = useState<Data>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<NetworkError>({ hasError: false });

  const meta = { isLoading, error };
  const actions = {
    startRequest: () => setIsLoading(true),
    endRequest: () => setIsLoading(false),
    setError: (errorMessage?: string) => {
      let message = (errorMessage ??= "Sorry, something went wrong");
      setError({
        hasError: true,
        message,
      });
    },
    setRequestData: (data: Data) => setData(data),
  };

  return { data, meta, actions };
};
