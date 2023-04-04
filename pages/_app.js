import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NextNProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
