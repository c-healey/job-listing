import React from "react";
class FilterCard extends React.Component {
  onClickEvent = (e) => {
    if (e.target.id === "clear-filters") {
      const filterNodes = [...document.querySelectorAll(".filter-field")];

      filterNodes.forEach((filterNode) => {
        filterNode.classList.add("hide");
      });
    } else if (e.target.id.length > 0) e.target.classList.add("hide");
    this.props.onClearFilters(e.target.id, e.target.innerHTML);
  };
  render() {
    const filters = this.props.filters;

    return (
      <div
        className="filter-card"
        data-filter="clearFilters"
        onClick={(e) => {
          this.onClickEvent(e);
        }}
      >
        <div className="filters">
          {filters.map((filter) => {
            return (
              <button
                className="btn btn--sqr btn--sm btn-job-detail filter-field hide"
                key={filter.replace(" ", "")}
                id={"f" + filter.replace(" ", "")}
                data-filter="picked-filter"
              >
                {filter}
              </button>
            );
          })}
        </div>
        <button
          className="clear-filters btn bt--sqr btn--sm btn--txt"
          id="clear-filters"
        >
          Clear
        </button>
      </div>
    );
  }
}
export default FilterCard;
