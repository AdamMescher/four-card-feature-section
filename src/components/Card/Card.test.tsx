import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { ReactComponent as Icon } from "../../assets/icon-karma.svg";
import Card from "./Card";

expect.extend(toHaveNoViolations);

describe("App Component", () => {
  it("Should display without errors", () => {
    const card = {
      title: "this is card title",
      copy: "this is some copy",
      color: "red",
      icon: Icon
    };
    render(
      <Card
        title={card.title}
        copy={card.copy}
        color={card.color}
        icon={card.icon}
      />
    );
    expect(screen.getByText(/this is card title/i)).toBeInTheDocument();
    expect(screen.getByText(/this is some copy/i)).toBeInTheDocument();
  });
  it("Should render without axe a11y errors", async () => {
    const card = {
      title: "this is card title",
      copy: "this is some copy",
      color: "red",
      icon: Icon
    };
    render(
      <Card
        title={card.title}
        copy={card.copy}
        color={card.color}
        icon={card.icon}
      />
    );
    expect(await axe(screen.getByRole("article"))).toHaveNoViolations();
  });
});
