import Image from "next/image";
import styles from "./page.module.css";
import Layout from "../../components/layout/Layout";
import JobIndex from "../../components/JobIndex";

export default function Home() {
  return (
    <Layout>
      <JobIndex></JobIndex>
    </Layout>
  );
}
