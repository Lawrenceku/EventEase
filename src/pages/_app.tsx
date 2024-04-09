import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Will Be There</title>
      </Head>
      <Toaster richColors position="top-right" />
      <Component {...pageProps} />
    </>
  );
}
