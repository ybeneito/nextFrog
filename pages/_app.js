import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import ResponsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "constants/theme";

// Ce composant _app nous permet de controler la façon dont l'application va s'initier.
export default function MyApp(props) {
  let ResponsiveFontTheme = ResponsiveFontSizes(theme);
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Supprime le CSS injecté côté serveur.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      {/* La balise Head de Next s'utilise de la meme manière qu'un <head> en HTML5 */}
      <Head>
        <title>Next4Frogs</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* Initie la possibilité de modifié le theme global de notre application */}
      <ThemeProvider theme={ResponsiveFontTheme}>
        {/* CssBaseline est une base de référence CSS pour Material-UI */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

// Avec propTypes on s'assure que les props sont des objets requis et qu'un composant doit être présent.
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
