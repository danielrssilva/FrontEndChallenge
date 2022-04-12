import { Col, Row } from "antd";
import Ribbon from "antd/lib/badge/Ribbon";
import pokeAbilitiesType from "../constants/pokeAbilitiesTypeColors";
import { StyledCard } from "../containers/CardDetails/CardDetails.styles";
import { AbilityI } from "../interfaces/resources/CardResource";

const buildAbilityCards = (abilities: AbilityI[]): JSX.Element[] =>
  abilities.map(({ name, type, text }) => (
    <Col data-testId='ability-type'>
      <Ribbon
        text={type}
        color={pokeAbilitiesType.find((a) => a.type === type)?.color}
      >
        <StyledCard
          title={
            <Row justify='space-between'>
              <Col data-testId='ability-name'>{name}</Col>
            </Row>
          }
        >
          {text}
        </StyledCard>
      </Ribbon>
    </Col>
  ));

export default buildAbilityCards;
