import { Space, Col } from "antd";
import styled from "styled-components";
import { Theme } from "../../theme";

const { spaces } = Theme;

const Container = styled.div`
  padding: ${spaces.mp};
`;

export const StyledSpace = styled(Space)`
  width: 100%;
`;

export const CardWrapper = styled.div`
  width: 27rem;
  display: flex;
  justify-content: center;
  margin-right: ${spaces.sp};
`;

export const StyledCol = styled(Col)`
  width: 90vw;
`;

export default Container;
