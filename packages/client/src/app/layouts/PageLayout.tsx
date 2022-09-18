import appConfig from "@features/app/app-config";
import Head from "next/head";
import type { FC, ReactNode } from "react";

interface Props {
  title?: string;
  description?: string;
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ title, description, children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Head>
        <title>{title ?? appConfig.APP_NAME}</title>
        <meta
          name="description"
          content={description ?? appConfig.APP_DESCRIPTION}
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default PageLayout;
