import styled from "styled-components";
import FourCardFeature from "../FourCardFeature";

const Wrapper = styled.main`
  --padding: 30px;
  background: var(--very-light-gray);
  width: 100%;
  height: 100vh;
  padding: var(--padding);
  display: grid;
  place-items: center;
  @media (min-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ThinTitle = styled.h2`
  font-weight: var(--fw-extra-light);
  color: var(--very-dark-blue);
`;
const SemiBoldTitle = styled.h2`
  font-weight: var(--fw-semi-bold);
  color: var(--very-dark-blue);
`;

const Copy = styled.p`
  color: var(--grayish-blue);
`;

function App() {
  return (
    <Wrapper data-testid="app">
      <CopyWrapper>
        <ThinTitle>Reliable, efficient delivery</ThinTitle>
        <SemiBoldTitle>Powered by Technology</SemiBoldTitle>
        <Copy>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </Copy>
      </CopyWrapper>
      <FourCardFeature />
    </Wrapper>
  );
}

export default App;
