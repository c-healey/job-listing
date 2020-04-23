import setSearchItems from "./setSearchItems";

const getFilters = (jobs) => {
  let newAllFilters = setSearchItems([], "", "", "init");
  jobs.forEach((job) => {
    for (let key in job) {
      if (job[key]) {
        if (["languages", "tools"].includes(key)) {
          for (let val of job[key]) {
            newAllFilters = setSearchItems(newAllFilters, key, val, "add");
          }
        } else if (
          [
            "role",
            "level",
            "postedAt",
            "contract",
            "location",
            "languages",
            "tools",
          ].includes(key) &&
          !newAllFilters[key].includes(job[key])
        ) {
          newAllFilters = setSearchItems(newAllFilters, key, job[key], "add");
        }
      }
    }
  });

  return newAllFilters;
};

export default getFilters;
