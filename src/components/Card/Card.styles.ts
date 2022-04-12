import styled from "styled-components";
import Theme from "../../theme/Theme";
const { spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${spaces.xh};
  &:hover {
    img {
      transition: 0.2s transform;
      transform: scale(1.05);
    }
  }
`;
