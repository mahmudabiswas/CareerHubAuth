import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  return (
    <div>
      <h1>JobsDetails : {id} </h1>
      <h1>Company name</h1>
      <p> {job.company_name} </p>
    </div>
  );
};

export default JobDetails;
