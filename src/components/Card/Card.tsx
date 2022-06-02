import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.article``;
const Title = styled.h3``;
const Copy = styled.p``;

const Card = ({ color, icon, title, copy }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </Wrapper>
  );
};

export default Card;
