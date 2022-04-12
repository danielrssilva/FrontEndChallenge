import { StyledSpace } from "./CardDetails.styles";
import { Spin, Row, Col, Button, Modal, Tag, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import CardResource, { AttackI } from "../../interfaces/resources/CardResource";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import buildColoredTag from "../../helpers/buildColoredTags";
import { animated, Spring } from "react-spring";
import StyledImage from "../../components/StyledImage";
import noData from "../../constants/noData";
import CardInformation from "../../components/CardInformation";
import buildAttackButtons from "../../helpers/buildAttackButtons";
import { t } from "i18next";
import buildAbilityCards from "../../helpers/buildAbilityCards";
import buildRuleCards from "../../helpers/buildRuleCards";

const { info } = Modal;

// Render modal showing attack information
export const showConfirm = (attack: AttackI) => {
  const { name, damage, cost, text } = attack;
  info({
    icon: null,
    keyboard: true,
    okText: "Close",
    title: (
      <Row justify='space-between'>
        <Col data-testId='modal-attack-name'>{name}</Col>
        <Col data-testId='modal-attack-dmg'>{damage}</Col>
      </Row>
    ),
    content: (
      <Row justify='space-between'>
        <Row gutter={[0, 8]}>
          <Col span={22} data-testId='modal-attack-text'>
            {text}
          </Col>
          <Col>
            <Row>{buildColoredTag(cost)}</Row>
          </Col>
        </Row>
      </Row>
    ),
  });
};

// Render card name and image
export const renderCardNameImage = (
  card: CardResource | undefined,
  isLoading: boolean
) => (
  <Col>
    <StyledSpace direction='vertical' size='middle' align='center'>
      <Title level={2} data-testId='card-name'>
        {card?.name || t("feedback.loading")}
      </Title>
      <Spring
        to={{
          transform: !isLoading ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      >
        {(props) => (
          <animated.div style={props}>
            <StyledImage
              alt='placeholder'
              src={
                card?.images.large ||
                require(`../../assets/card-placeholder.png`)
              }
              loading='eager'
            />
          </animated.div>
        )}
      </Spring>
      <Text type='secondary' data-testId='card-id'>
        {card?.id || "#"}
      </Text>
    </StyledSpace>
  </Col>
);

// Render card informations
export const renderCardInfo = ({
  types,
  supertype,
  resistances,
  weaknesses,
  attacks,
  abilities,
  rules,
}: CardResource): JSX.Element => (
  <Space direction='vertical' size='middle'>
    <CardInformation title={t("pages.details.types")}>
      {buildColoredTag(types || [supertype])}
    </CardInformation>
    <CardInformation title={t("pages.details.resistences")}>
      {resistances ? buildColoredTag(resistances) : noData}
    </CardInformation>
    <CardInformation title={t("pages.details.weaknesses")}>
      {weaknesses ? buildColoredTag(weaknesses) : noData}
    </CardInformation>
    {abilities && (
      <CardInformation title={t("pages.details.abilities")}>
        {buildAbilityCards(abilities)}
      </CardInformation>
    )}
    <CardInformation title={t("pages.details.attacks")}>
      {attacks ? buildAttackButtons(attacks, showConfirm) : noData}
    </CardInformation>
    {rules && (
      <CardInformation title={t("pages.details.rules")}>
        {buildRuleCards(rules)}
      </CardInformation>
    )}
  </Space>
);

// Render loading state
export const renderLoadingInfo = (): JSX.Element => {
  const tags = (
    <Col>
      <Tag>{t("feedback.loading")}</Tag>
    </Col>
  );
  const buttons = (
    <Col>
      <Button type='primary' shape='round' disabled>
        {t("feedback.loading")}
      </Button>
    </Col>
  );
  return (
    <Spin indicator={<LoadingOutlined />}>
      <Space direction='vertical' size='middle'>
        <CardInformation title={t("pages.details.types")}>
          {tags}
        </CardInformation>
        <CardInformation title={t("pages.details.resistences")}>
          {tags}
        </CardInformation>
        <CardInformation title={t("pages.details.weaknesses")}>
          {tags}
        </CardInformation>
        <CardInformation title={t("pages.details.attacks")}>
          {buttons}
        </CardInformation>
      </Space>
    </Spin>
  );
};

export default renderCardInfo;
