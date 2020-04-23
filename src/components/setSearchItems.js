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

  let newPickedFilters = {};

  if (action === "init" || action === "clear") {
    return noFiltersPicked;
  } else if (action === "add") {
    if (
      pickedFilters[category] &&
      !pickedFilters[category].includes(searchInput)
    ) {
      newPickedFilters = JSON.parse(JSON.stringify(pickedFilters));

      newPickedFilters[category].push(searchInput);
    } else return pickedFilters;
  } else if (action === "remove") {
    newPickedFilters = JSON.parse(JSON.stringify(pickedFilters));

    if (
      newPickedFilters[category] &&
      newPickedFilters[category].includes(searchInput)
    ) {
      newPickedFilters[category] = newPickedFilters[category].filter((a) => {
        return a !== searchInput;
      });
    } else return pickedFilters;
  }

  return newPickedFilters;
};

export default setSearchItems;
