// pages/_app.js
import '../styles/globals.css'; // Adjust the path if your CSS file is elsewhere

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}