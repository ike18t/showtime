import { useEffect, useState } from "react";

import { Show } from "../models/show";

const SHOWS_ENDPOINT = `${import.meta.env.VITE_API_DOMAIN}/search/shows?q=`;

export const useShowSearch = () => {
  const [shows, setShows] = useState<ReadonlyArray<Show>>([]);
  const [searchText, setSearchText] = useState<string>();

  useEffect(() => {
    if (!searchText) {
      setShows([]);
      return;
    }

    fetch(SHOWS_ENDPOINT + encodeURIComponent(searchText))
      .then((response) => response.json())
      .then((shows) => setShows(shows.map(({ show }: { show: Show }) => show)));
  }, [searchText]);

  return {
    shows,
    search: setSearchText,
  };
};
