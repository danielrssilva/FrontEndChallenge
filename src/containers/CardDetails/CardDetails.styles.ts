import { Card, Space } from "antd";
import styled from "styled-components";
import { Theme } from "../../theme";

const { spaces } = Theme;

const Container = styled.div`
  width: 100%;
  padding-inline: ${spaces.xl};
  padding-block: ${spaces.l};
`;

export const StyledSpace = styled(Space)`
  max-width: ${spaces.xxh};
`;

export const StyledCard = styled(Card)`
  max-width: 30rem;
`;

export default Container;
