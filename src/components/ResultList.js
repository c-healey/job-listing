import React from "react";
import ResultCard from "./ResultsCard";

const ResultList = (props) => {
  let jobsSearch = props.jobsSearch;

  const OnClickResultList = (e) => {
    let filterValue = "";
    let filterAction = "";
    let category = "";

    if (e.target.classList.contains("filter-option")) {
      category = e.target.dataset.filter;
      filterValue = e.target.innerHTML;
      filterAction = "add";

      document
        .querySelector(`#f${e.target.innerHTML.replace(" ", "")}`)
        .classList.remove("hide");
    }
    props.handleStateUpdates(category, filterValue, filterAction);
  };

  if (jobsSearch.length > 0) {
    const results = jobsSearch.map((result, idx) => {
      return <ResultCard key={idx} item={result} />;
    });
    return (
      <div className="results">
        <div
          className="result-list"
          onClick={(e) => {
            OnClickResultList(e);
          }}
        >
          {results}
        </div>
      </div>
    );
  }
  return <div>Oh NO jobs. Bummer</div>;
};
export default ResultList;
