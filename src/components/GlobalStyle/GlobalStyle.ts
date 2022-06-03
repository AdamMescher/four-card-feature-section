import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --red: ${theme.color.primary.red};
    --cyan: ${theme.color.primary.cyan};
    --orange: ${theme.color.primary.orange};
    --blue: ${theme.color.primary.blue};
    --very-dark-blue: ${theme.color.neutral.veryDarkBlue};
    --grayish-blue: ${theme.color.neutral.grayishBlue};
    --very-light-gray: ${theme.color.neutral.veryLightGray};
    --white: ${theme.color.neutral.white};
    --fw-extra-light: ${theme.typography.font.weight.extraLight};
    --fw-regular: ${theme.typography.font.weight.regular};
    --fw-semi-bold: ${theme.typography.font.weight.semiBold};
    --ff-poppins: ${theme.typography.font.family.poppins};
    --fs-body: ${theme.typography.body.fontSize};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: var(--fs-body);
    font-family: var(--ff-poppins);
  }
`;

export default GlobalStyle;
