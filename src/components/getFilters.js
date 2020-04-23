import setSearchItems from "./setSearchItems";

const getFilters = (jobs) => {
  let allFilters = [];
  let newAllFilters = setSearchItems([], "", "", "init");
  jobs.forEach((job) => {
    for (let key in job) {
      if (job[key]) {
        if (["languages", "tools"].includes(key)) {
          for (let val of job[key]) {
            if (!allFilters.includes(val)) {
              allFilters.push(val);
            }
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
          !allFilters.includes(job[key])
        ) {
          allFilters.push(job[key]);
          newAllFilters = setSearchItems(newAllFilters, key, job[key], "add");
        }
      }
    }
  });
  console.log("allNEW FILTERS + ", newAllFilters);
  return newAllFilters;
  return [...new Set(allFilters)].sort();
};

export default getFilters;
