import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import Starships from "../StarshipsList/Starships";
import "./StarshipsList.css";
import Loading from "../Loader/Loader";
import { animateScroll as scroll } from "react-scroll";

const StarshipsList = () => {


  function scrollToBottom() {
    scroll.scrollToBottom({
      duration: 500, // Animasyon süresi
      delay: 0, // Animasyon gecikmesi
      smooth: "easeInOutQuart", // Animasyon tipi
    });
  }
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
              scrollToBottom(); // Kaydırma animasyonunu tetikle
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