
import { useInfiniteQuery } from "react-query";
import React, { useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
const AppContext = React.createContext();
const BASE_URL = "https://swapi.dev/api/starships/";

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
 
  const fetchStarShips = useCallback(
    async ({ pageParam = 1 }) => {
      setLoading(true);
      try {
        // The data is retrieved using the axios library.
        const response = await axios.get(
          `${BASE_URL}?search=${searchTerm}&page=${pageParam}`
        );
        const { next, results } = response.data;

        const newStarShip = results.map((ship) => {
          const {
            url,
            name,
            model,
            hyperdrive_rating,
            passengers,
            max_atmosphering_speed,
            manufacturer,
            crew,
            cargo_capacity,
          } = ship;
          const id = url.match(/(\d+)/)[0];
          return {
            id: id,
            name: name,
            model: model,
            hyperdrive_rating: hyperdrive_rating,
            passengers: passengers,
            max_atmosphering_speed: max_atmosphering_speed,
            manufacturer: manufacturer,
            crew: crew,
            cargo_capacity: cargo_capacity,
          };
        });

        if (newStarShip?.length > 0) {
          setResultTitle("");
        } else {
          setResultTitle("No Search Result Found!");
        }

        setLoading(false);
        return { newStarShip, next };
      } catch (error) {
        console.log(error);
        setLoading(false);
        return { error };
      }
    },
    [searchTerm]
  );
//  It is paginated using the useInfiniteQuery hook from the react query library.
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,

  } = useInfiniteQuery(["starships", searchTerm], fetchStarShips, {
    getNextPageParam: (lastPage) => {
      if (lastPage?.newStarShip?.length === 0) {
        return null;
      } else {
        return lastPage.next;
      }
    },
    refetchOnWindowFocus: true, // Automatically refresh the page when the page focus changes
  });

  const starShips = data
    ? data.pages.map((page) => page.newStarShip).flat()
    : [];

  useEffect(() => {
    if (error) {
      setResultTitle(`Error: ${error.message}`);
    } else if (data && starShips?.length === 0) {
      setResultTitle("No Search Result Found!");
    }
  }, [error, data, starShips]);

  return (
    <AppContext.Provider
      value={{
        loading,
        starShips,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
 // AppContext content is retrieved using the useGlobalContext hook.
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };