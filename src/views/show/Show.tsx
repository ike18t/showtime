import React from "react";
import Modal from "react-modal";
import ReactOutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import { useShowSelection } from "../../contexts/ShowSelection";

import { ShowDetails } from "./ShowDetails";

export const Show = () => {
  const { selectedShow, setSelectedShow } = useShowSelection();

  return !selectedShow ? null : (
    <Modal isOpen>
      <Close />
      <ReactOutsideClickHandler
        onOutsideClick={() => setSelectedShow(undefined)}
      >
        <ShowDetails show={selectedShow} />
      </ReactOutsideClickHandler>
    </Modal>
  );
};

const Close = styled.button.attrs({ children: "X" })`
  float: right;
`;
