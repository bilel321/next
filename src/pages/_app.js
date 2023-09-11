import '@/styles/globals.css'
import Router from 'next/router'
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on("routeChangeStart",(url) =>{
    console.log("Route is changing");
    setIsLoading(true)
  });
  Router.events.on("routeChangeComplete",(url) =>{
    setIsLoading(false)

    console.log("Route is changing...");
  });
  return (<div>
    {/* {isLoading && <CircularProgress className="z-40" />} */}
  <Component {...pageProps} /> </div>)
}
