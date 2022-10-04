import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../utils/geo-fetch-helpers';

type Props = {
  onSearchChange: (searchData: string) => void;
};

const Search = (props: Props) => {
  const [searchText, setSearchText] = useState('');
  console.log(geoApiOptions);
  const loadOptions = (inputValue: string) => {
    fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData: string) => {
    setSearchText(searchData);
    props.onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="найти город"
      debounceTimeout={600}
      value={searchText}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
