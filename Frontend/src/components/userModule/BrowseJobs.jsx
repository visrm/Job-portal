import UserNav from "./UserNav";
import JobFilterCard from "../JobFilterCard";
import { useSelector } from "react-redux";
import JobCard from "../JobCard";
import { useEffect, useState } from "react";
import useGetAllJobs from "../customHooks/useGetAllJobs";

const BrowseJobs = () => {
  // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
  useGetAllJobs();
  const { allJobs, searchQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchQuery) {
      const filteredJobs = allJobs.filter((job) => {
        // console.log(job);
        return (
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job?.company?.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchQuery]);

  return (
    <>
      <header>
        <UserNav />
      </header>
      <main>
        <section
          style={{
            display: "block",
            margin: "0 auto",
            height: "100%"
          }}
        >
          <div style={{ display: "flex", width: "100%", gap: "1.25rem" }}>
            <div style={{ display: "block", width: "35%" }}>
              <JobFilterCard />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                width: "100%",
                height: "100%",
                maxWidth: "100%"
              }}
            >
              {filterJobs.length <= 0 ? (
                <span>Job not found</span>
              ) : (
                <div id="jobs-jobcard-grid">
                  {filterJobs.length > 0 &&
                    filterJobs.map((job) => {
                      return (
                        <div key={job?._id}>
                          <JobCard job={job} />
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BrowseJobs;
