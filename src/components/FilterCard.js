import React from "react";

const FilterCard = (props) => {
  const OnClickEvent = (e) => {
    let category = "";
    let filterValue = "";
    let filterAction = "";

    if (e.target.id === "clear-filters") {
      const filterNodes = [...document.querySelectorAll(".filter-field")];

      filterNodes.forEach((filterNode) => {
        filterNode.classList.add("hide");
      });

      filterAction = "clear";
    } else if (e.target.id.length > 0) {
      e.target.classList.add("hide");
      category = e.target.dataset.filter;
      filterValue = e.target.innerHTML;
      filterAction = "remove";
    }
    props.handleStateUpdates(category, filterValue, filterAction);
  };

  // console.log("filters ", props.filters);
  let filters = props.filters;
  let results = [];
  for (let key in filters) {
    // console.log(key, filters[key]);
    results.push(
      ...filters[key].map((filter) => {
        return (
          <button
            className="btn btn--sqr btn--sm btn-job-detail filter-field hide"
            key={filter.replace(" ", "")}
            id={"f" + filter.replace(" ", "")}
            data-filter={key}
          >
            {filter}
          </button>
        );
      })
    );
  }

  return (
    <div
      className="filter-card"
      data-filter="clearFilters"
      onClick={(e) => {
        OnClickEvent(e);
      }}
    >
      <div className="filters">
        {results}
        {/* {filters.map((filter) => {
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
        })} */}
      </div>
      <button
        className="clear-filters btn bt--sqr btn--sm btn--txt"
        id="clear-filters"
      >
        Clear
      </button>
    </div>
  );
};

// class FilterCard extends React.Component {
//   onClickEvent = (e) => {
//     if (e.target.id === "clear-filters") {
//       const filterNodes = [...document.querySelectorAll(".filter-field")];

//       filterNodes.forEach((filterNode) => {
//         filterNode.classList.add("hide");
//       });
//     } else if (e.target.id.length > 0) e.target.classList.add("hide");
//     this.props.onClearFilters(e.target.id, e.target.innerHTML);
//   };
//   render() {
//     const filters = this.props.filters;

//     return (
//       <div
//         className="filter-card"
//         data-filter="clearFilters"
//         onClick={(e) => {
//           this.onClickEvent(e);
//         }}
//       >
//         <div className="filters">
//           {filters.map((filter) => {
//             return (
//               <button
//                 className="btn btn--sqr btn--sm btn-job-detail filter-field hide"
//                 key={filter.replace(" ", "")}
//                 id={"f" + filter.replace(" ", "")}
//                 data-filter="picked-filter"
//               >
//                 {filter}
//               </button>
//             );
//           })}
//         </div>
//         <button
//           className="clear-filters btn bt--sqr btn--sm btn--txt"
//           id="clear-filters"
//         >
//           Clear
//         </button>
//       </div>
//     );
//   }
// }
export default FilterCard;
