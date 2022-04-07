import React from "react";
import { Col, Card, Row, Typography, Tag } from "antd";
import { Link } from "react-router-dom";
import { Container } from "./Card.style";
import { animated, Spring } from "react-spring";
import CardProps from "./Card.types";
import VisibilitySensor from "react-visibility-sensor";

const { Text, Title } = Typography;

const StyledCard = (card: CardProps): JSX.Element => {
  const { id, name, images, types, supertype } = card;

  const pokeTypesAndColors = [
    { type: "Colorless", color: "" },
    { type: "Darkness", color: "black" },
    { type: "Dragon", color: "orange" },
    { type: "Fairy", color: "pink" },
    { type: "Fighting", color: "red" },
    { type: "Fire", color: "volcano" },
    { type: "Grass", color: "green" },
    { type: "Lightning", color: "yellow" },
    { type: "Metal", color: "gray" },
    { type: "Psychic", color: "purple" },
    { type: "Water", color: "blue" },
  ];

  const renderCard = (isVisible: boolean) => {
    const image = isVisible
      ? images.small
      : "https://images.pokemontcg.io/ecard2/0.png";

    return (
      <Col>
        <Container>
          <Link to={`card/${id}`}>
            <Card
              hoverable
              cover={<img alt={name} src={image} loading='lazy' />}
              style={{
                borderRadius: "1rem",
              }}
            >
              <Row align='middle'>
                <Title level={5}>
                  {name}
                  <Text type='secondary'> #{id}</Text>
                </Title>
              </Row>
              <Row>
                <div>
                  {types ? (
                    types?.map((type) => (
                      <Tag
                        color={
                          pokeTypesAndColors.find((t) => t.type === type)?.color
                        }
                      >
                        {type}
                      </Tag>
                    ))
                  ) : (
                    <Tag color='gray'>{supertype}</Tag>
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
      {({ isVisible }) => (
        <Spring
          to={{
            transform: isVisible ? "rotateY(0deg)" : "rotateY(180deg)",
          }}
        >
          {(props) => (
            <animated.div style={props}>{renderCard(isVisible)}</animated.div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

export const SkeletonCard = (): JSX.Element => (
  <Col>
    <Container>
      <Card
        cover={
          <img
            alt='pokemon card'
            src='https://images.pokemontcg.io/ecard2/0.png'
            loading='lazy'
          />
        }
      >
        {/* <Meta
          title={name}
          description={
            <>
              <div>{id}</div>
              <div>{types ? types?.map((type) => type) : supertype}</div>
            </>
          }
        /> */}
      </Card>
    </Container>
  </Col>
);

export default StyledCard;
