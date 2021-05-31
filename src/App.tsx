import React from "react";
import styled from "styled-components";

import { ShowSelectionProvider } from "./contexts/ShowSelection";
import { Search } from "./views/search/Search";
import { Show } from "./views/show/Show";

function App() {
  return (
    <AppContainer>
      <h1>It's Showtime!</h1>
      <ShowSelectionProvider>
        <Search />
        <Show />
      </ShowSelectionProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
