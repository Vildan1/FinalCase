import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import Starships from "../StarshipsList/Starships";
import "./StarshipsList.css";
import Loading from "../Loader/Loader";
import { animateScroll as scroll } from "react-scroll";

const StarshipsList = () => {

  // Scroll animation
  function scrollToBottom() {
    scroll.scrollToBottom({
      duration: 500, 
      delay: 0, 
      smooth: "easeInOutQuart", 
    });
  }
  //  "I'm getting the data and state values from the global context using the hook "useGlobalContext".
  const {
    starShips,
    loading,
    resultTitle,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,

  } = useGlobalContext();

  if (loading) return <Loading />;

 // 40 starships göster
  return (
    <section className='starships'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className="starshipsContent grid">
          {starShips.slice(0, 40).map((item, index) => {
            return <Starships key={index} item={item} />;
          })}
        </div>
        <div className="flex justify-center items-center mainButton">
          {isFetching && !isFetchingNextPage && (
            <p>Fetching more starships...</p>
          )}
          <button
            className="loadMoreBtn"
            onClick={() => {
              fetchNextPage();
              scrollToBottom(); // Trigger scroll animation
            }}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more starships..." : hasNextPage ? "Load more starships..." : "All starships loaded"}
          </button>
        </div>

      </div>

    </section>
  )
}

export default StarshipsList