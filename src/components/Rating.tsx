import React from "react";
import styled from "styled-components";

const MAX_STARS = 5;

export const Rating = ({ number: rating }: { number: number | null }) => {
  const stars = Math.round((rating || 0) / 2);

  const starComponents = [
    Array(stars).fill(Star),
    Array(MAX_STARS - stars).fill(Unstar),
  ].flat();

  return (
    <span>
      {starComponents.map((Component, idx) => (
        <Component key={idx} />
      ))}
    </span>
  );
};

const Star = styled.span.attrs({ children: "★" })``;
const Unstar = styled.span.attrs({ children: "☆" })``;
