import React from "react";
import styled from "styled-components";

import { Show, yearPremiered } from "../../models/show";
import { UnsafeRenderer } from "../../components/UnsafeRenderer";
import { Rating } from "../../components/Rating";
import { Title } from "../../components/Title";

export const ShowDetails = ({ show }: { show: Show }) => {
  return (
    <Container>
      <Poster src={show.image.medium} />
      <Details>
        <Title>
          {show.name} ({yearPremiered(show)})
        </Title>
        <Rating number={show.rating.average} />
        <Summary>{show.summary}</Summary>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  & > * {
    margin-right: 25px;
  }
`;
const Poster = styled.img``;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Summary = styled(UnsafeRenderer)``;
