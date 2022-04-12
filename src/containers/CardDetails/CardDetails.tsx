import React from "react";
import Container from "./CardDetails.styles";
import { useCardById } from "../../hooks/useCards";
import { Row } from "antd";
import { useParams } from "react-router-dom";
import renderCardInfo, {
  renderCardNameImage,
  renderLoadingInfo,
} from "./CardDetailsConstants";

const CardDetails = (): JSX.Element => {
  const { cardId } = useParams();
  const { data: card, isLoading } = useCardById(cardId || "");

  return (
    <Container>
      <Row gutter={32}>
        {renderCardNameImage(card, isLoading)}
        {isLoading && renderLoadingInfo()}
        {card && renderCardInfo(card)}
      </Row>
    </Container>
  );
};

export default CardDetails;
