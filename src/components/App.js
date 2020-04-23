import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterCard from "./FilterCard";
import ResultList from "./ResultList";
import setSearchItems from "./setSearchItems";
import setSearchResult from "./setSearchResult";
import "../sass/main.scss";

import getFilters from "./getFilters";

const App = () => {
  // read job List
  // set the filters available from the job List
  // set filters picked on click
  // show the filtered job List
  const [jobs, setJobs] = useState([]);
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
  const [jobsSearch, setJobsSearch] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`./data.json`);
      setJobs(response.data);
      setFilters(getFilters(response.data));
      setPickedFilters(setSearchItems({}, "", "", "init"));
      setJobsSearch(response.data);
    })();
  }, []);

  // console.log("jobs ", jobs);

  // console.log("filters ", filters);
  // console.log("picked filters ", pickedFilters);
  // console.log("jobs searched ", jobsSearch);
  const handleStateUpdates = (category, value, action) => {
    let newPickedFilters = setSearchItems(
      pickedFilters,
      category,
      value,
      action
    );

    setPickedFilters(newPickedFilters);
    console.log(
      "after setpicked filters newpicked, picked",
      newPickedFilters,
      pickedFilters
    );

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
// class App extends React.Component {
//   state = { jobs: [], jobsFiltered: [], filters: [], filtersPicked: {} };
//   noFiltersPicked = {
//     tools: [],
//     languages: [],
//     role: [],
//     level: [],
//     postedAt: [],
//     contract: [],
//     location: [],
//   };
//   async componentDidMount() {
//     const response = await axios.get(`./data.json`);
//     let filters = [];

//     response.data.forEach((job) => {
//       for (let key in job) {
//         if (job[key]) {
//           if (["languages", "tools"].includes(key)) {
//             for (let val of job[key]) {
//               if (!filters.includes(val)) {
//                 filters.push(val);
//               }
//             }
//           } else if (
//             [
//               "role",
//               "level",
//               "postedAt",
//               "contract",
//               "location",
//               "languages",
//               "tools",
//             ].includes(key) &&
//             !filters.includes(job[key])
//           ) {
//             filters.push(job[key]);
//           }
//         }
//       }
//     });
//     // filters = [...new Set(filters)].sort();
//     console.log(filters.sort());
//     this.setState({
//       jobs: response.data,
//       jobsFiltered: response.data,
//       filters: filters.sort(),
//       filtersPicked: JSON.parse(JSON.stringify(this.noFiltersPicked)),
//     });
//   }

//   setFilters = (filter, term, action) => {
//     let fullSet = true;
//     let temp = JSON.parse(JSON.stringify(this.state.filtersPicked));
//     if (action === "add") {
//       if (temp[filter] && !temp[filter].includes(term)) {
//         fullSet = false;
//         temp[filter].push(term);
//       }
//     } else if (action === "clear") {
//       for (let key in temp) {
//         if (temp[key].includes(term)) {
//           temp[key] = temp[key].filter((item) => item !== term);
//         }
//         if (temp[key].length > 0) fullSet = false;
//       }
//     }

//     let filteredData = [];

// if (!fullSet) {
//   filteredData = this.state.jobs.filter((job) => {
//     for (let key in temp) {
//       if (temp[key].length > 0 && job[key] && job[key].length > 0) {
//         if (typeof job[key] === "string" && temp[key].includes(job[key]))
//           return true;

//         for (let filterVal of job[key]) {
//           if (temp[key].includes(filterVal)) return true;
//         }
//       }
//     }

//     return false;
//   });
//     } else {
//       // fullset
//       filteredData = JSON.parse(JSON.stringify(this.state.jobs));
//     }
//     this.setState({ filtersPicked: temp, jobsFiltered: filteredData });
//   };
//   clearFilters = (filter, term) => {
//     if (filter === "clear-filters") {
//       this.setState({
//         filtersPicked: this.noFiltersPicked,
//         jobsFiltered: this.state.jobs.map((job) => job),
//       });
//     } else {
//       //remove filter from picked filters, update jobsFiltered,
//       // update state

//       this.setFilters(filter, term, "clear");
//     }
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="content center-col">
//           <FilterCard
//             filters={this.state.filters}
//             onClearFilters={this.clearFilters}
//           />
//           <ResultList
//             jobs={this.state.jobsFiltered}
//             onSetFilters={this.setFilters}
//           />
//         </div>
//       </div>
//     );
//   }
// }
export default App;
