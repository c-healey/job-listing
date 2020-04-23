const setSearchItems = (pickedFilters, category, searchInput, action) => {
  // default is clear
  const noFiltersPicked = {
    tools: [],
    languages: [],
    role: [],
    level: [],
    postedAt: [],
    contract: [],
    location: [],
  };
  console.log(
    `SETSEARCHITEMS category ${category} searchinput ${searchInput} action ${action}`
  );
  // console.log(`pickedFilters[${category}] ${pickedFilters[category]} `);
  let newPickedFilters = {};

  if (action === "init" || action === "clear") {
    return noFiltersPicked;
  } else if (action === "add") {
    if (
      pickedFilters[category] &&
      !pickedFilters[category].includes(searchInput)
    ) {
      newPickedFilters = JSON.parse(JSON.stringify(pickedFilters));
      // console.log(newPickedFilters);
      newPickedFilters[category].push(searchInput);
      // console.log(
      //   `add picked filter ${newPickedFilters[category]} ${newPickedFilters}`
      // );
    } else return pickedFilters;
  } else if (action === "remove") {
    console.log("actoin === remove");
    newPickedFilters = JSON.parse(JSON.stringify(pickedFilters));
    console.log("pickedfilters[category]", newPickedFilters[category]);
    if (
      newPickedFilters[category] &&
      newPickedFilters[category].includes(searchInput)
    ) {
      newPickedFilters[category] = newPickedFilters[category].filter((a) => {
        console.log("a =", a, "searchinput = ", searchInput);
        return a !== searchInput;
      });
      console.log("remove newpickedfilters", newPickedFilters);
    } else return pickedFilters;
  }
  console.log(`return newPickedFilters ${newPickedFilters}`);
  return newPickedFilters;
};

export default setSearchItems;
// setFilters = (filter, term, action) => {
//   let fullSet = true;
//   let temp = JSON.parse(JSON.stringify(this.state.filtersPicked));
//   if (action === "add") {
//     if (temp[filter] && !temp[filter].includes(term)) {
//       fullSet = false;
//       temp[filter].push(term);
//     }
//   } else if (action === "clear") {
//     for (let key in temp) {
//       if (temp[key].includes(term)) {
//         temp[key] = temp[key].filter((item) => item !== term);
//       }
//       if (temp[key].length > 0) fullSet = false;
//     }
//   }
//   // set jobs search results
//   let filteredData = [];

//   if (!fullSet) {
//     filteredData = this.state.jobs.filter((job) => {
//       for (let key in temp) {
//         if (temp[key].length > 0 && job[key] && job[key].length > 0) {
//           if (typeof job[key] === "string" && temp[key].includes(job[key]))
//             return true;

//           for (let filterVal of job[key]) {
//             if (temp[key].includes(filterVal)) return true;
//           }
//         }
//       }

//       return false;
//     });
//   } else {
//     // fullset
//     filteredData = JSON.parse(JSON.stringify(this.state.jobs));
//   }
//   this.setState({ filtersPicked: temp, jobsFiltered: filteredData });
// };
