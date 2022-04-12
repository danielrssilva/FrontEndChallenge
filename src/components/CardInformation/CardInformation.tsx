import React from "react";
import { Col, Row, Typography } from "antd";
import CardInformationProps from "./CardInformation.types";

const { Title } = Typography;

const CardInformation = ({
  title,
  children,
}: CardInformationProps): JSX.Element => {
  return (
    <Col>
      <Row gutter={8} wrap>
        <Col>
          <Title level={2}>{title}</Title>
          <Row gutter={[8, 8]}>{children}</Row>
        </Col>
      </Row>
    </Col>
  );
};
export default CardInformation;
