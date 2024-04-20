"use client";
import React from "react";
import Link from "next/link";
import JobItem from "./job/JobItem";
import { useState, useEffect } from "react";

export default function JobIndex({ jobs }) {
  return (
    <div className="container container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-4">{/* <Filters /> */}</div>

        <div className="col-xl-9 col-lg-8 content-left-offset">
          <div className="my-5">
            <h4 className="page-title">Latest Jobs</h4>
            <div className="d-block">
              <Link href="/search">Go to Search</Link>
            </div>
          </div>
          {jobs && jobs.map((job) => <JobItem key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
}
