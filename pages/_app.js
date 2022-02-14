import { NextUIProvider } from "@nextui-org/react";

import Layout from "../components/Layout";
import "../styles/globals.css";

import { createTheme } from "@nextui-org/react";

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

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
