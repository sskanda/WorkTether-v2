import Image from "next/image";
import styles from "./page.module.css";
import Layout from "../../../components/layout/Layout";
import Search from "../../../components/layout/Search";

export default async function SearchPage({ params }: any) {
  return (
    <>
      <Layout>
        <Search></Search>
      </Layout>
    </>
  );
}
