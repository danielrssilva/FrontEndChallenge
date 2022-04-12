import { Button, Col } from "antd";
import { AttackI } from "../interfaces/resources/CardResource";

const buildAttackButtons = (
  attacks: AttackI[],
  showConfirm: (attack: AttackI) => void
): JSX.Element[] =>
  attacks?.map((attack) => (
    <Col key={attack.name}>
      <Button
        type='primary'
        shape='round'
        key={attack.name}
        onClick={() => showConfirm(attack)}
        data-testId='card-attack'
      >
        {attack.name}
      </Button>
    </Col>
  ));

export default buildAttackButtons;
