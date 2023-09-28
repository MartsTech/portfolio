import { getRunningOperationPromises } from "@app/api";
import PageLayout from "@app/layouts/PageLayout";
import { storeWrapper } from "@app/store";
import type { NextPageWithLayout } from "@app/types/page";
import HomeModule from "@features/home/HomeModule";
import { profileApi } from "@features/profile/profile-api";
import Script from "next/script";
import type { ReactElement } from "react";

const HomePage: NextPageWithLayout = () => {
  return <HomeModule />;
};

HomePage.getLayout = (page: ReactElement) => {
  return (
    <PageLayout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QG4MT4EMFJ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QG4MT4EMFJ');
        `}
      </Script>
      {page}
    </PageLayout>
  );
};

export const getStaticProps = storeWrapper.getStaticProps((store) => {
  return async () => {
    store.dispatch(profileApi.endpoints.getProfile.initiate());
    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  };
});

export default HomePage;
