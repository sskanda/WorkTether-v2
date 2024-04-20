import Image from "next/image";
import styles from "./page.module.css";
import Layout from "../../components/layout/Layout";
import JobIndex from "../../components/JobIndex";
import { NextRequest } from "next/server";

export default async function Home() {
  const data = await getData();

  const { jobs, count, resPerPage } = data;

  return (
    <Layout>
      <JobIndex jobs={jobs}></JobIndex>
    </Layout>
  );
}

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/jobs`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
