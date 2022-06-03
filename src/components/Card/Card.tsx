import * as React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  copy: string;
  color: string;
  icon: any;
}

const Wrapper = styled.article<{ color: string }>`
  border-radius: 6px;
  border-top: 4px solid;
  border-color: ${(props) => props.color};
  position: relative;
  background: var(--white);
  padding: 16px;
  @media (min-width: 500px) {
    min-height: 225px;
    flex-grow: 1;
    max-width: 400px;
  }
`;
const Title = styled.h3`
  font-weight: var(--fw-semi-bold);
  color: var(--very-dark-blue);
`;
const Copy = styled.p`
  margin-top: 8px;
  color: var(--grayish-blue);
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Card = ({ color, icon, title, copy }: Props) => {
  const Icon = icon;
  return (
    <Wrapper color={color}>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <IconContainer>
        <Icon />
      </IconContainer>
    </Wrapper>
  );
};

export default Card;
