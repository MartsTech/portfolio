import { storeWrapper } from "@app/store";
import "@app/styles/globals.css";
import type { AppPropsWithLayout } from "@app/types/page";
import Script from "next/script";
import { Provider as StoreProvider } from "react-redux";

const App = ({ Component, ...rest }: AppPropsWithLayout) => {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StoreProvider store={store}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-NKQP5249" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GTM-NKQP5249');
        `}
      </Script>
      {getLayout(<Component {...props.pageProps} />)}
    </StoreProvider>
  );
};

export default App;
