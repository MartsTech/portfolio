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
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{title ?? appConfig.APP_NAME}</title>
        <meta
          name="description"
          content={description ?? "Portfolio created with Next.js"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default PageLayout;
