
import '../lib/styles/main.scss';
import type { AppProps } from 'next/app'
import { Provider as ReactProvider } from "react-redux";
import store from '../store/index';
import { Loader, MainNavigation, Provider } from '../lib';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DefaultSeo } from 'next-seo';
import Footer from '../lib/components/App/Footer';


export default function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const location = router.pathname;
  console.log(location);
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleError);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleError);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setLoading(true);

    Router.events.on('beforeHistoryChange', handleRouteChange);

    return () => {
      Router.events.off('beforeHistoryChange', handleRouteChange);
    };
  }, []);

  return (

    <ReactProvider store={store}>
      <Provider>
        <MainNavigation />
        {loading && <Loader />}
        <Component {...pageProps} />
        {location !== '/Home' && <Footer />}
      </Provider>
    </ReactProvider>

  )
}
