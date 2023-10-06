import React from "react";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  return (
    <div className=" ">
      <div className="card h-[400px] bg-base-100 shadow-xl">
        <figure>
          <img src={job.logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job.job_title}</h2>
          <p>{job.company_name}</p>
          <div className="gap-3">
            <button className="btn mr-2">{job.remote_or_onsite}</button>
            <button className="btn ">{job.job_type}</button>
          </div>
          <div className="card-actions justify-end">
            <p>{job.location}</p>
            <button className="btn btn-ghost">{job.salary}</button>
          </div>
          <div className="card-actions ">
            <Link to={`/job/${job.id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
