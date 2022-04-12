import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import Theme from "../../theme/Theme";

const { spaces } = Theme;

export const CardWrapper = styled.div`
  width: 27rem;
  display: flex;
  justify-content: center;
  margin-right: ${spaces.sp};
`;

const StyledCarouselContainer = styled(AliceCarousel)`
  width: 100%;
`;

export default StyledCarouselContainer;
