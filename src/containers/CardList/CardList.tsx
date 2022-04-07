import React, { useRef, useState, useCallback, useEffect } from "react";
import Container from "./CardList.style";
import useCards, { useInfiniteCards } from "../../hooks/useCards";
import { Row, Col, Card, Empty, BackTop, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import CardResource from "../../interfaces/resources/CardResource";
import StyledCard, { SkeletonCard } from "../../components/Card/Card";
import { Spring } from "react-spring";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const { Meta } = Card;

const CardList = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data: cardList, isLoading, refetch } = useCards(pageNumber);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);

  const renderCards = (cards: CardResource[] | undefined) => {
    return cards?.map((card: CardResource) => <StyledCard {...card} />);
  };

  const responsive = {
    0: { items: 1 },
    630: { items: 2 },
    880: { items: 3 },
    960: { items: 4 },
  };

  const renderCardsCarousel = (cards: CardResource[] | undefined) => {
    return (
      <AliceCarousel
        mouseTracking
        paddingLeft={50}
        responsive={responsive}
        items={cards?.map((card: CardResource) => (
          <StyledCard {...card} />
        ))}
      />
    );
  };
  return (
    <Container style={{ overflowY: isLoading ? "hidden" : "visible" }}>
      <Row>
        <Col>
          {isLoading && (
            <Spin spinning={isLoading} indicator={<LoadingOutlined />}>
              <Row gutter={[16, 32]} justify='space-around'>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </Row>
            </Spin>
          )}
          {windowWidth >= 960 ? (
            <Row gutter={[16, 32]} justify='space-around'>
              {renderCards(cardList)}
            </Row>
          ) : (
            <Row>{renderCardsCarousel(cardList)}</Row>
          )}
        </Col>
      </Row>
      {cardList && cardList.length === 0 && (
        <Row justify='center'>
          <Col>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description='Seems like you are out of cards'
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CardList;
