import Head from "next/head";
import favIcon from "../assets/favicon.ico";
import "@/index.css"
export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
    <meta
      name="description"
      content="Ahmed's Eldardeery personal website"
    />    
    <title>Ahmed</title>
    <link rel="icon" href={favIcon.src} />
  </Head>
  <Component {...pageProps} />
</>
)}