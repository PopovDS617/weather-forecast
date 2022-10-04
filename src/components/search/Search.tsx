import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../utils/geo-fetch-helpers';

type Props = {
  onSearchChange: (searchData: string) => void;
};

const Search = (props: Props) => {
  const [searchText, setSearchText] = useState('');

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData: string) => {
    setSearchText(searchData);
    props.onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="find city"
      debounceTimeout={600}
      value={searchText}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
