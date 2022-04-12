import React from "react";
import { Col, Card, Row, Typography, Tag } from "antd";
import { Link } from "react-router-dom";
import { Container } from "./Card.styles";
import { animated, Spring } from "react-spring";
import CardProps from "./Card.types";
import VisibilitySensor from "react-visibility-sensor";
import buildColoredTag from "../../helpers/buildColoredTags";
import StyledImage from "../StyledImage";
import { t } from "i18next";
import { useCardDispatch } from "../../context/RecentlyViewedCards/CardContext";

const { Text, Title } = Typography;

const StyledCard = (card: CardProps): JSX.Element => {
  const { id, name, images, types, supertype } = card;
  const cardDispatch = useCardDispatch();

  const renderCard = (isVisible: boolean) => {
    const cardImage = (
      <StyledImage
        alt={name}
        src={images.small}
        loading='lazy'
        data-testId='card-image'
      />
    );
    const placeholderImage = (
      <StyledImage
        alt={name}
        src={require(`../../assets/card-placeholder.png`)}
        loading='lazy'
        data-testId='card-placeholder-image'
      />
    );
    return (
      <Col>
        <Container>
          <Link
            to={`card/${id}`}
            onClick={() =>
              cardDispatch({
                type: "addRecentCard",
                data: { card },
              })
            }
            data-testId='card-link'
          >
            <Card
              hoverable
              cover={
                <Spring
                  to={{
                    transform: isVisible ? "rotateY(0deg)" : "rotateY(180deg)",
                  }}
                >
                  {(props) => (
                    <animated.div style={props}>
                      {isVisible ? cardImage : placeholderImage}
                    </animated.div>
                  )}
                </Spring>
              }
              style={{
                borderRadius: "1rem",
              }}
            >
              <Row align='middle' justify='space-between'>
                <Col>
                  <Title level={5} data-testId='card-name'>
                    {name}
                  </Title>
                </Col>
                <Col>
                  <Title level={5}>
                    <Text type='secondary' data-testId='card-id'>
                      {id}
                    </Text>
                  </Title>
                </Col>
              </Row>
              <Row>
                <div>
                  {types ? (
                    buildColoredTag(types)
                  ) : (
                    <Tag color='gray' data-testId='card-type'>
                      {supertype}
                    </Tag>
                  )}
                </div>
              </Row>
            </Card>
          </Link>
        </Container>
      </Col>
    );
  };

  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => renderCard(isVisible)}
    </VisibilitySensor>
  );
};

export const SkeletonCard = (): JSX.Element => (
  <Col>
    <Container>
      <Card
        cover={
          <StyledImage
            alt='poké card'
            src={require(`../../assets/card-placeholder.png`)}
            loading='lazy'
          />
        }
      >
        <Row align='middle' justify='space-between'>
          <Col>
            <Title level={5}>Pokémon</Title>
          </Col>
          <Col>
            <Title level={5}>
              <Text type='secondary'>#</Text>
            </Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tag>{t("feedback.loading")}</Tag>
          </Col>
        </Row>
      </Card>
    </Container>
  </Col>
);

export default StyledCard;
