import { ReactNode } from "react";
import Head from "next/head";
import styles from "./styles.module.css";
import ThemeWrapper from "../../containers/themeWrapper";
import LocalStorageWrapper from "../../containers/localStorageWrapper";

interface Props {
  title?: string;
  children: ReactNode;
}

const Page = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? `Martwyn | ${title}` : "Martwyn"}</title>
      </Head>
      <LocalStorageWrapper>
        <ThemeWrapper className={styles.container}>{children}</ThemeWrapper>
      </LocalStorageWrapper>
    </>
  );
};

export default Page;
