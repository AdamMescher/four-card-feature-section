import * as React from "react";
import styled from "styled-components";
import Card from "../Card";
import { ReactComponent as Calculator } from "../../assets/icon-calculator.svg";
import { ReactComponent as Karma } from "../../assets/icon-karma.svg";
import { ReactComponent as Supervisor } from "../../assets/icon-supervisor.svg";
import { ReactComponent as TeamBuilder } from "../../assets/icon-team-builder.svg";
import theme from "../../theme";

const items = [
  {
    title: "Supervisor",
    copy: "Monitors activity to identify project roadblocks",
    icon: Supervisor,
    color: theme.color.primary.cyan
  },
  {
    title: "Team Builder",
    copy:
      "Scans our talent network to create the optimal team for your project",
    icon: TeamBuilder,
    color: theme.color.primary.red
  },
  {
    title: "Karma",
    copy: "Regularly evaluates our talent to ensure quality",
    icon: Karma,
    color: theme.color.primary.orange
  },
  {
    title: "Calculator",
    copy: "Uses data from past projects to provide better delivery estimates",
    icon: Calculator,
    color: theme.color.primary.blue
  }
];

const Wrapper = styled.section`
  --gap: 24px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
`;
const CenterTwoCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
`;

const FourCardFeature = () => {
  return (
    <Wrapper>
      <Card
        title={items[0].title}
        copy={items[0].copy}
        color={items[0].color}
        icon={items[0].icon}
      />
      <CenterTwoCards>
        <Card
          title={items[1].title}
          copy={items[1].copy}
          color={items[1].color}
          icon={items[1].icon}
        />
        <Card
          title={items[2].title}
          copy={items[2].copy}
          color={items[2].color}
          icon={items[2].icon}
        />
      </CenterTwoCards>
      <Card
        title={items[3].title}
        copy={items[3].copy}
        color={items[3].color}
        icon={items[3].icon}
      />
    </Wrapper>
  );
};

export default FourCardFeature;
