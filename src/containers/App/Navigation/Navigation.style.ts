import styled from "styled-components";
import { Theme } from "../../../theme";

const { spaces } = Theme;

const Container = styled.div`
  width: 100%;
  height: ${spaces.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1rem solid;
  position: sticky;
`;

export default Container;
