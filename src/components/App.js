import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterCard from "./FilterCard";
import ResultList from "./ResultList";
import setSearchItems from "./setSearchItems";
import setSearchResult from "./setSearchResult";
import "../sass/main.scss";

import getFilters from "./getFilters";

const App = () => {
  // debatable if jobs  need to be a state var
  // because the page is only updated when filters are picked or removed
  const [jobs, setJobs] = useState([]);
  const [jobsSearch, setJobsSearch] = useState([]);
  const [filters, setFilters] = useState({
    tools: [],
    languages: [],
    role: [],
    level: [],
    postedAt: [],
    contract: [],
    location: [],
  });
  const [pickedFilters, setPickedFilters] = useState({
    tools: [],
    languages: [],
    role: [],
    level: [],
    postedAt: [],
    contract: [],
    location: [],
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get(`./data.json`);
      setJobs(response.data);
      setFilters(getFilters(response.data));
      setPickedFilters(setSearchItems({}, "", "", "init"));
      setJobsSearch(response.data);
    })();
  }, []);

  const handleStateUpdates = (category, value, action) => {
    let newPickedFilters = setSearchItems(
      pickedFilters,
      category,
      value,
      action
    );

    setPickedFilters(newPickedFilters);

    setJobsSearch(setSearchResult(newPickedFilters, jobs));
    // not passing the pickedFilters state variable because it isn't updated yet.
    // so annoying
  };

  return (
    <div className="container">
      <div className="content center-col">
        <FilterCard filters={filters} handleStateUpdates={handleStateUpdates} />
        <ResultList
          jobsSearch={jobsSearch}
          handleStateUpdates={handleStateUpdates}
        />
      </div>
    </div>
  );
};

export default App;
