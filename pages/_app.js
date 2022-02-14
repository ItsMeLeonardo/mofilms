import { NextUIProvider } from "@nextui-org/react";

import Layout from "../components/Layout";
import "../styles/globals.css";

import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      accents1: "#333333",
      black: '#333  '
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
