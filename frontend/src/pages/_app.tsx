
import type { AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Provider as ReactProvider } from "react-redux";
import { MainNavigation, Provider } from '../lib';
import Footer from '../lib/components/App/Footer';
import '../lib/styles/main.scss';
import store from '../store/index';


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
        {/* {loading && <Loader />} */}
        <Component {...pageProps} />
        {location !== '/Home' && <Footer />}
      </Provider>
    </ReactProvider>

  )
}
