import { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { SWRConfig, SWRConfiguration } from "swr";

//components
import Layout from "components/Layout";
//utils
import { useChangePage } from "hooks/useChangePage";

import "styles/globals.css";

//nextUI theme
const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      accents1: "#333333",
      black: "#333",
      gradPurple: "45deg, $red800 -20%, $purple400 50%",
      gradRed: "90deg, #da4453 0%, #89216b 100%",
      gradBlue: "112deg, #AAFFEC -63.59%, #ff4ecd -20.3%, #0070F3 70.46%",
    },
  },
});

//swr config
const config: SWRConfiguration = {
  revalidateOnFocus: false,
};

function MyApp({ Component, pageProps }: AppProps) {
  useChangePage();
  return (
    <NextUIProvider theme={darkTheme}>
      <SWRConfig value={config}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </NextUIProvider>
  );
}

export default MyApp;
