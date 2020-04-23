import React from "react";

class ResultsCard extends React.Component {
  render() {
    let item = this.props.item;

    return (
      <div className={item.featured ? "card featured" : "card"} key={item.id}>
        <div className="company-logo">
          <img src={item.logo} alt="company logo" />
        </div>
        <div className="grid left job-profile">
          <h2>{item.company}</h2>
          <div className="grid col-2 left">
            <button className={item.new ? "btn  btn--sm btn-new" : "hide"}>
              New!
            </button>
            <button
              className={item.featured ? "btn  btn--sm btn-featured" : "hide"}
            >
              Featured
            </button>
          </div>

          <span className="full-width position">{item.position}</span>
          <ul className="menu--dot full-width">
            <li className=" filter-option" data-filter="postedAt">
              {item.postedAt}
            </li>
            <li className="dot filter-option" data-filter="contract">
              {item.contract}
            </li>
            <li className="dot filter-option" data-filter="location">
              {item.location}
            </li>
          </ul>
        </div>
        <div className="grid left job-detail">
          <button
            className="btn btn--sqr btn--sm btn-job-detail filter-option"
            data-filter="role"
          >
            {item.role}
          </button>
          <button
            className="btn btn--sqr btn--sm btn-job-detail filter-option"
            data-filter="level"
          >
            {item.level}
          </button>
          {item.languages
            ? item.languages.map((lang, idx) => {
                return (
                  <button
                    className="btn btn--sqr btn--sm btn-job-detail filter-option"
                    data-filter="languages"
                    key={item.id + lang}
                  >
                    {lang}
                  </button>
                );
              })
            : ""}
          {item.tools
            ? item.tools.map((tool, idx) => {
                return (
                  <button
                    className="btn btn--sqr btn--sm btn-job-detail  filter-option"
                    data-filter="tools"
                    key={item.id + tool}
                  >
                    {tool}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}
export default ResultsCard;
