import { getRunningOperationPromises } from "@app/api";
import PageLayout from "@app/layouts/PageLayout";
import { storeWrapper } from "@app/store";
import type { NextPageWithLayout } from "@app/types/page";
import HomeModule from "@features/home/HomeModule";
import { profileApi } from "@features/profile/profile-api";
import type { ReactElement } from "react";

const HomePage: NextPageWithLayout = () => {
  return <HomeModule />;
};

HomePage.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};

// export const getStaticProps = storeWrapper.getStaticProps((store) => {
//   return async () => {
//     store.dispatch(profileApi.endpoints.getProfile.initiate());
//     await Promise.all(getRunningOperationPromises());

//     return {
//       props: {},
//     };
//   };
// });

export default HomePage;
