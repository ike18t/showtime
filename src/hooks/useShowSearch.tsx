import { useEffect, useState } from "react";

import { Show } from "../models/show";

const SHOWS_ENDPOINT = "http://api.tvmaze.com/search/shows?q=";

export const useShowSearch = () => {
  const [shows, setShows] = useState<ReadonlyArray<Show>>([]);
  const [searchText, setSearchText] = useState<string | undefined>();

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
