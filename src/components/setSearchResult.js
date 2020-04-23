const setSearchResult = (pickedFilters, jobs) => {
  let jobSearch = JSON.parse(JSON.stringify(jobs));

  for (let key in pickedFilters) {
    if (pickedFilters[key].length > 0) {
      // find all jobs that match
      jobSearch = jobSearch.filter((job) => {
        if (job[key] && job[key].length > 0) {
          if (
            typeof job[key] === "string" &&
            pickedFilters[key].includes(job[key])
          )
            return true;

          for (let filterVal of job[key]) {
            if (pickedFilters[key].includes(filterVal)) return true;
          }
        }
      });
    }
  }

  return jobSearch;
};

export default setSearchResult;
