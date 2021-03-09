import "../styles/globals.css";
import { Windmill } from "@windmill/react-ui";
import myTheme from "../components/StyleChanges/myTheme";
import { AuthProvider } from "../components/data/authProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Lift Workout App</title>
        <link rel="Lift Icon" type="image/ico" href="/dumbell.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          name="app.js"
          content="windmill theme context page"
        />
      </Head>
      <AuthProvider>
        <Windmill usePreferences theme={myTheme}>
          <Component {...pageProps} />
        </Windmill>
      </AuthProvider>
    </React.Fragment>
  );
}

export default MyApp;
