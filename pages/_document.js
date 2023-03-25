import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class PantryDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Arimo&family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=IM+Fell+DW+Pica:ital@0;1&family=Inter+Tight:wght@300&family=Libre+Baskerville:ital@0;1&family=Noto+Sans+Mono:wght@200&family=Playfair+Display:ital@0;1&family=Poppins:ital,wght@0,200;1,200&family=Rubik:wght@300;400&family=Special+Elite&family=Staatliches&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PantryDocument;
