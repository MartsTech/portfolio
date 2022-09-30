import PageLayout from "@app/layouts/PageLayout";
import type { NextPageWithLayout } from "@app/types/page";
import HomeModule from "@features/home/HomeModule";
import type { ReactElement } from "react";

const HomePage: NextPageWithLayout = () => {
  return <HomeModule />;
};

HomePage.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};

export default HomePage;
