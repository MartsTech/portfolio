import { storeWrapper } from "@app/store";
import "@app/styles/globals.css";
import type { AppPropsWithLayout } from "@app/types/page";
import { Provider as StoreProvider } from "react-redux";

const App = ({ Component, ...rest }: AppPropsWithLayout) => {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StoreProvider store={store}>
      {getLayout(<Component {...props.pageProps} />)}
    </StoreProvider>
  );
};

export default App;
