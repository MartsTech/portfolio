import { storeWrapper } from "@app/store";
import "@app/styles/globals.css";
import type { AppPropsWithLayout } from "@app/types/page";
import GTM from "@features/gtm/GTM";
import { Provider as StoreProvider } from "react-redux";

const App = ({ Component, ...rest }: AppPropsWithLayout) => {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GTM containerId="GTM-NKQP5249" />
      <StoreProvider store={store}>
        {getLayout(<Component {...props.pageProps} />)}
      </StoreProvider>
      <noscript>
        <iframe
          src={"https://www.googletagmanager.com/ns.html?id=GTM-NKQP5249"}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
};

export default App;
