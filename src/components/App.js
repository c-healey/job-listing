import React from "react";
import axios from "axios";
import FilterCard from "./FilterCard";
import ResultList from "./ResultList";
import "../sass/main.scss";

class App extends React.Component {
  state = { jobs: [], jobsFiltered: [], filters: [], filtersPicked: {} };
  noFiltersPicked = {
    tools: [],
    languages: [],
    role: [],
    level: [],
    postedAt: [],
    contract: [],
    location: [],
  };
  async componentDidMount() {
    const response = await axios.get(`./data.json`);
    let filters = [];

    response.data.forEach((job) => {
      for (let key in job) {
        if (job[key]) {
          if (["languages", "tools"].includes(key)) {
            for (let val of job[key]) {
              if (!filters.includes(val)) {
                filters.push(val);
              }
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
            !filters.includes(job[key])
          ) {
            filters.push(job[key]);
          }
        }
      }
    });
    // filters = [...new Set(filters)].sort();
    console.log(filters.sort());
    this.setState({
      jobs: response.data,
      jobsFiltered: response.data,
      filters: filters.sort(),
      filtersPicked: JSON.parse(JSON.stringify(this.noFiltersPicked)),
    });
  }

  setFilters = (filter, term, action) => {
    let fullSet = true;
    let temp = JSON.parse(JSON.stringify(this.state.filtersPicked));
    if (action === "add") {
      if (temp[filter] && !temp[filter].includes(term)) {
        fullSet = false;
        temp[filter].push(term);
      }
    } else if (action === "clear") {
      for (let key in temp) {
        if (temp[key].includes(term)) {
          temp[key] = temp[key].filter((item) => item !== term);
        }
        if (temp[key].length > 0) fullSet = false;
      }
    }

    let filteredData = [];

    if (!fullSet) {
      filteredData = this.state.jobs.filter((job) => {
        for (let key in temp) {
          if (temp[key].length > 0 && job[key] && job[key].length > 0) {
            if (typeof job[key] === "string" && temp[key].includes(job[key]))
              return true;

            for (let filterVal of job[key]) {
              if (temp[key].includes(filterVal)) return true;
            }
          }
        }

        return false;
      });
    } else {
      // fullset
      filteredData = JSON.parse(JSON.stringify(this.state.jobs));
    }
    this.setState({ filtersPicked: temp, jobsFiltered: filteredData });
  };
  clearFilters = (filter, term) => {
    if (filter === "clear-filters") {
      this.setState({
        filtersPicked: this.noFiltersPicked,
        jobsFiltered: this.state.jobs.map((job) => job),
      });
    } else {
      //remove filter from picked filters, update jobsFiltered,
      // update state

      this.setFilters(filter, term, "clear");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="content center-col">
          <FilterCard
            filters={this.state.filters}
            onClearFilters={this.clearFilters}
          />
          <ResultList
            jobs={this.state.jobsFiltered}
            onSetFilters={this.setFilters}
          />
        </div>
      </div>
    );
  }
}
export default App;
