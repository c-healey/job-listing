import React from "react";
import ResultCard from "./ResultsCard";
import "./ResultList.css";

class ResultList extends React.Component {
  onClickResultList = (e) => {
    if (e.target.classList.contains("filter-option")) {
      const searchValue = e.target.innerHTML;
      let searchFilter = e.target.dataset.filter;
      // const tag = e.target.data;
      document
        .querySelector(`#f${e.target.innerHTML.replace(" ", "")}`)
        .classList.remove("hide");

      this.props.onSetFilters(searchFilter, searchValue, "add");
    }
  };
  render() {
    if (this.props.jobs.length > 0) {
      const results = this.props.jobs.map((result, idx) => {
        return <ResultCard key={idx} item={result} />;
      });
      return (
        <div className="results">
          <div
            className="result-list"
            onClick={(e) => {
              this.onClickResultList(e);
            }}
          >
            {results}
          </div>
        </div>
      );
    }
    return <div>Oh NO jobs. Bummer</div>;
  }
}
export default ResultList;
