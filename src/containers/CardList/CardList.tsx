import React, { useEffect, useState } from "react";
import Container, { StyledSpace, StyledCol } from "./CardList.styles";
import useCards, { useCardsByTerm } from "../../hooks/useCards";
import { Col, Row } from "antd";
import renderCards, {
  renderCardsCarousel,
  renderLoading,
  renderNoData,
  renderPageControls,
} from "./CardListConstants";
import SearchInput from "../../components/SearchInput";
import { t } from "i18next";

const CardList = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [nameSearch, setNameSearch] = useState<string>("");

  const hasSearchTerm = !!nameSearch;
  const {
    data: cardList,
    isLoading: loadingCards,
    isPreviousData: previousCardList,
  } = useCards(pageNumber);
  const {
    data: cardTermList,
    isLoading: loadingCardTermList,
    isPreviousData: previousCardTermList,
  } = useCardsByTerm(pageNumber, nameSearch, hasSearchTerm);

  const isPreviousData = previousCardList || previousCardTermList;

  useEffect(() => {
    setPageNumber(1);
  }, [nameSearch]);

  return (
    <Container>
      <StyledSpace direction='vertical' size='large' align={"center"}>
        <Col>
          <SearchInput
            placeholder={t("placeholders.search")}
            onChange={setNameSearch}
            data-testid='search-input'
          />
        </Col>
        <Col>
          {(loadingCards || loadingCardTermList) && renderLoading()}
          {window.innerWidth >= 970 && (
            <Row gutter={[16, 32]} justify='space-around'>
              {hasSearchTerm
                ? renderCards(cardTermList)
                : renderCards(cardList)}
            </Row>
          )}
          {hasSearchTerm
            ? cardTermList?.length === 0 && renderNoData()
            : cardList?.length === 0 && renderNoData()}
        </Col>
      </StyledSpace>
      {window.innerWidth < 970 && (
        <StyledCol>
          {hasSearchTerm
            ? renderCardsCarousel(cardTermList)
            : renderCardsCarousel(cardList)}
        </StyledCol>
      )}
      {renderPageControls(
        pageNumber,
        setPageNumber,
        isPreviousData,
        cardList,
        cardTermList
      )}
    </Container>
  );
};

export default CardList;
