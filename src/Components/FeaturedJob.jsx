import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";

const FeaturedJob = () => {
  const [job, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <>
        <div className=" text-center">
          <h1 className="mb-4 text-6xl">Featured Jobs {job.length} </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 gap-36 ">
          {job?.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
        <>
          <button
            className="btn btn-primary"
            onClick={() => setDataLength(job.length)}
          >
            show more
          </button>
        </>
      </>
    </div>
  );
};

export default FeaturedJob;
