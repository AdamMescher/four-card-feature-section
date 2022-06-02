import * as React from "react";
import styled from "styled-components";

const items = [
  { title: "", copy: "", icon: "" },
  { title: "", copy: "", icon: "" },
  { title: "", copy: "", icon: "" },
  { title: "", copy: "", icon: "" }
];

const Wrapper = styled.main``;

function App() {
  return (
    <Wrapper data-testid="app">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Wrapper>
  );
}

export default App;
