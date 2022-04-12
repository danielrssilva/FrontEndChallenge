import React from "react";
import { ButtonProps, StyledCarouselProps } from "./StyledCarousel.types";
import StyledCarouselContainer, { CardWrapper } from "./StyledCarousel.styles";
import StyledCard from "../Card/Card";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const StyledCarousel = ({ cards }: StyledCarouselProps) => {
  return (
    <StyledCarouselContainer
      disableDotsControls
      autoWidth
      mouseTracking
      keyboardNavigation
      autoHeight
      items={cards?.map((card) => (
        <CardWrapper>
          <StyledCard {...card} />
        </CardWrapper>
      ))}
      renderPrevButton={({ isDisabled }: ButtonProps) => (
        <Button disabled={isDisabled} icon={<LeftOutlined />} />
      )}
      renderNextButton={({ isDisabled }: ButtonProps) => (
        <Button disabled={isDisabled} icon={<RightOutlined />} />
      )}
    />
  );
};

export default StyledCarousel;
