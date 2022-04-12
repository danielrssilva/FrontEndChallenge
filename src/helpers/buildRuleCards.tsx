import { Col } from "antd";
import { StyledCard } from "../containers/CardDetails/CardDetails.styles";

const buildRuleCards = (rules: string[]): JSX.Element[] =>
  rules.map((rule) => (
    <Col>
      <StyledCard data-testId='card-rule'>{rule}</StyledCard>
    </Col>
  ));

export default buildRuleCards;
