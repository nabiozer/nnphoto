
import '../lib/styles/main.scss';
import type { AppProps } from 'next/app'
import { Provider as ReactProvider } from "react-redux";
import store from '../store/index';
import { MainNavigation, Provider } from '../lib';


export default function App({ Component, pageProps }: AppProps) {
  return (

    <ReactProvider store={store}>
      <Provider>
        <MainNavigation />
        <Component {...pageProps} />
      </Provider>
    </ReactProvider>

  )
}
