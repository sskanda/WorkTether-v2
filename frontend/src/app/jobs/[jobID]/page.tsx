import Image from "next/image";
import styles from "./page.module.css";
import Layout from "../../../../components/layout/Layout";
import JobDetails from "../../../../components/job/JobDetails";

export default async function JobetailsPage({ params }: any) {
  const jobData = await getData(params.jobID);
  return (
    <>
      <Layout>
        <JobDetails job={jobData}></JobDetails>
      </Layout>
    </>
  );
}

async function getData(jobID: any) {
  const res = await fetch(`${process.env.API_URL}/api/job/${jobID}`, {
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
