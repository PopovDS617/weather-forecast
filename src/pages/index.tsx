import React from 'react';
import Search from '../components/search/Search';

const Home = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="h-screen bg-green-200  ">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
};

export default Home;
