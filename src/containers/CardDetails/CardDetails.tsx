import React from "react";
import queryString from "query-string";
import Container from "./CardDetails.style";
import { useCardById } from "../../hooks/useCards";
import { Spin, Row, Col, Button, Modal } from "antd";
import { LoadingOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import CardResource from "../../interfaces/resources/CardResource";
import { useParams } from "react-router-dom";
import { useBoolean } from "../../hooks/useBoolean";

const { confirm } = Modal;

const showConfirm = (attack: any) => {
  confirm({
    title: attack.name,
    icon: null,
    content: (
      <>
        <div>{attack.text}</div>
        <div>DMG: {attack.damage ? attack.damage : "-"}</div>
        <div>COST: {attack.cost.map((c: any) => c)}</div>
      </>
    ),
  });
  //   Custo de “mana”
  // Nome
  // Dano
  // Descrição
};

const CardDetails = (): JSX.Element => {
  const { cardId } = useParams();
  const { data: card, isLoading } = useCardById(cardId || "");

  return (
    <Container>
      {isLoading && (
        <Row>
          <Col>
            <Spin indicator={<LoadingOutlined />} />
          </Col>
        </Row>
      )}
      {card && !isLoading && (
        <Row>
          <Col>
            <img alt={card.name} src={card.images.large} />
          </Col>
          <Col>
            {card.name} · {card.id}
            <>
              <div>Types: {card.types?.map((type) => type)}</div>
              <div>
                Resistences: {card.resistances?.map(({ type }) => type)}
              </div>
              <div>Weaknesses: {card.weaknesses?.map(({ type }) => type)}</div>
            </>
            Attacks
            {card.attacks?.map((attack) => (
              <Button
                type='primary'
                shape='round'
                key={attack.name}
                onClick={() => showConfirm(attack)}
              >
                {attack.name}
              </Button>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CardDetails;
