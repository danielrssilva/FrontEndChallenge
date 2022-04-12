import { Row, Col, Empty, Spin, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import CardResource from "../../interfaces/resources/CardResource";
import StyledCard, { SkeletonCard } from "../../components/Card/Card";
import StyledCarousel from "../../components/StyledCarousel";
import { StyledSpace } from "./CardList.styles";
import { t } from "i18next";

// render card image, name, type and id
const renderCards = (cards: CardResource[] | undefined) => {
  return cards?.map((card: CardResource) => (
    <StyledCard {...card} key={card.id} />
  ));
};

// render card image, name, type and id carousel mode
export const renderCardsCarousel = (cards: CardResource[] | undefined) => {
  if (cards?.length === 0) return;
  return <StyledCarousel cards={cards} />;
};

// render loading skeleton
export const renderLoading = () => {
  const placeholder: number[] = new Array(14).fill(0);
  return (
    <Spin spinning indicator={<LoadingOutlined />}>
      <Row gutter={[16, 32]} justify='space-around'>
        {placeholder.map((value, i) => (
          <SkeletonCard key={value + i} />
        ))}
      </Row>
    </Spin>
  );
};

// render empty state
export const renderNoData = () => (
  <Row justify='center'>
    <Col>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description='Seems like you are out of cards'
        data-testId='no-data-message'
      />
    </Col>
  </Row>
);

export const renderPageControls = (
  pageNumber: number,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
  isPreviousData: boolean,
  cardList: CardResource[] | undefined,
  cardTermList: CardResource[] | undefined
) => (
  <Col>
    <StyledSpace direction='vertical' size='large' align={"center"}>
      <Row gutter={8} justify='center'>
        <Col>
          <Button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))}
            disabled={pageNumber === 1 || isPreviousData}
          >
            {t("pages.home.previous")}
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              if (!isPreviousData) {
                setPageNumber((prev) => prev + 1);
              }
            }}
            disabled={
              isPreviousData ||
              (cardList && cardList?.length < 250) ||
              (cardTermList && cardTermList?.length < 250)
            }
          >
            {t("pages.home.next")}
          </Button>
        </Col>
      </Row>
      <Col>
        {isPreviousData && (
          <Row gutter={8}>
            <Col>
              <Spin indicator={<LoadingOutlined />} />
            </Col>
            <Col>{t("feedback.fetching")}</Col>
          </Row>
        )}
      </Col>
    </StyledSpace>
  </Col>
);

export default renderCards;
