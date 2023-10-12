import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
            rel='stylesheet'
          />

          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css'
          />
          <link
            rel='stylesheet'
            href='https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css'
          />
          <link rel='stylesheet' href='/assets/css/main.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
