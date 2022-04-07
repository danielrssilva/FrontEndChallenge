import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const { colors, fonts } = Theme;

const GobalStyle = createGlobalStyle`
    * {
        border-color: ${colors.baseAccent};
        transition: background-color .5s ease-in-out;
        scrollbar-width: auto;
    }
    body {
        font-size: ${fonts.size};
        font-family: ${fonts.family};
        font-weight: ${fonts.weight.regular};
        background: ${colors.fill};
        color: ${colors.baseAccent};
        box-sizing: border-box;
        overflow: hidden;
    }
    button {
        border: 0.1rem solid ${colors.baseAccent};
        color: ${colors.baseAccent};
        background-color: ${colors.fill};
    }
    a {
        color: ${colors.baseAccent};
    }
`;

export default GobalStyle;
