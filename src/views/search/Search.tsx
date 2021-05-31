import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { useShowSearch } from "../../hooks/useShowSearch";
import { useShowSelection } from "../../contexts/ShowSelection";

import { SearchResults } from "./SearchResults";

export const Search = () => {
  const [searchText, setSearchText] = useState<string | undefined>();
  const { search, shows } = useShowSearch();
  const { setSelectedShow } = useShowSelection();

  const searchButtonHandler = () => search(searchText);
  const searchInputChangeHandler = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => setSearchText(value);

  return (
    <>
      <SearchContainer>
        <SearchInput onChange={searchInputChangeHandler} />
        <SearchButton onClick={searchButtonHandler} disabled={!searchText} />
      </SearchContainer>
      {!!shows.length && (
        <>
          <hr />
          <SearchResults shows={shows} onSelect={setSelectedShow} />
        </>
      )}
    </>
  );
};

const SearchInput = styled.input.attrs({ placeholder: "Search Text" })`
  width: 100%;
`;
const SearchButton = styled.button.attrs({ children: "Search" })``;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    font-size: 24px;
  }
`;
