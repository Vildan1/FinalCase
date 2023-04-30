import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import './Search.css';

const Search = () => {
  const { setSearchTerm, setResultTitle, fetchNextPage } = useGlobalContext();
  const searchText = useRef("search");

  useEffect(() => searchText.current.focus(), []);

  // Triggers and searches when the form is submitted 
  const handleSubmit = (e) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current.value.trim();

    if (!tempSearchTerm.replace(/[^\w\s]/gi, '')) {
      setSearchTerm('');
      setResultTitle('Please Enter Something ...');

    }
    else {
      setSearchTerm(searchText.current.value);

    }

    // also calls the "fetchNextPage" function, a function passed from the parent component via the "useGlobalContext" hook.
     // This function is responsible for fetching the next page of search results.
    fetchNextPage();
    
  };

  return (
    
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form onSubmit={handleSubmit} className='search'>
            <div className='searchText'> Name / Model </div>

            <div className='search-form-elem flex flex-sb bg-white'>
              <input type='text' className='form-control' placeholder='Name/Model' ref={searchText}  />

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
