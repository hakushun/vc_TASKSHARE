import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useStore } from '../redux/configureStore';

import '../components/stylesheets/reset.scss';
import '../components/stylesheets/global.scss';

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();

  const handleRouteChange = () => {
    const main = document.getElementById('main');
    main?.focus();
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <div id="overlay" />
    </Provider>
  );
}
