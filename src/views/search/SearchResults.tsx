import React from "react";
import styled from "styled-components";

import { Show, yearPremiered } from "../../models/show";

type SearchResultsProps = {
  shows: ReadonlyArray<Show>;
  onSelect?: (show: Show) => void;
};

export const SearchResults = ({ shows, onSelect }: SearchResultsProps) => (
  <>
    {shows.map((show) => (
      <SearchResult
        key={show.id}
        show={show}
        onClick={() => onSelect && onSelect(show)}
      />
    ))}
  </>
);

type SearchResultProps = {
  show: Show;
  onClick?: (show: Show) => void;
};

const SearchResult = ({ onClick, show }: SearchResultProps) => (
  <SearchResultRow onClick={() => onClick && onClick(show)}>
    {show.name} {show.premiered && `(${yearPremiered(show)})`}
  </SearchResultRow>
);

const SearchResultRow = styled.div`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
