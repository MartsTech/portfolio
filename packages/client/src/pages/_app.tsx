import "@app/styles/globals.css";
import type { AppPropsWithLayout } from "@app/types/page";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default App;
