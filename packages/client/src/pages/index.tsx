import PageLayout from "@app/layouts/PageLayout";
import type { NextPageWithLayout } from "@app/types/page";
import type { ReactElement } from "react";

const HomePage: NextPageWithLayout = () => {
  return <></>;
};

HomePage.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};

export default HomePage;
