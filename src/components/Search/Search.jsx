import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import './Search.css';
import debounce from 'lodash/debounce';

const Search = () => {
  const { setSearchTerm, setResultTitle, fetchNextPage } = useGlobalContext();
  const searchText = useRef("search");

  useEffect(() => searchText.current.focus(), []);

  const handleSearch = debounce(() => {
    const tempSearchTerm = searchText.current.value.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
  }, 500);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current.value.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setSearchTerm('');
      setResultTitle('Please Enter Something ...');

    }
    else {
      setSearchTerm(searchText.current.value);

    }

    // Kullanımı burada
    fetchNextPage();
    
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form onSubmit={handleSubmit} className='search'>
            <div className='searchText'> Name / Model </div>

            <div className='search-form-elem flex flex-sb bg-white'>
              <input type='text' className='form-control' placeholder='Name/Model' ref={searchText} onChange={handleSearch} />

            </div>
            <button type='submit' className='submitButton flex flex-c'>
              <span className='filter'>Filter</span>
            </button>

          </form>
          <div className='underline'>
            <div className='search-underline'></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;
