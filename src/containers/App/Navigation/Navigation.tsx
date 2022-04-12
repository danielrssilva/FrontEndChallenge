import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { HomeOutlined, HistoryOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  useCardDispatch,
  useCardState,
} from "../../../context/RecentlyViewedCards/CardContext";
import StyledSider, { StyledMenu } from "./Navigation.styles";

const { Item } = Menu;
const Navigation = (): JSX.Element => {
  const cardsDispatch = useCardDispatch();
  const { recentlyViewedCards } = useCardState();

  const { t } = useTranslation();

  return (
    <StyledSider className='site-layout-background' theme='light' collapsed>
      <StyledMenu mode='inline' inlineCollapsed>
        <Item key='home' icon={<HomeOutlined />}>
          <Link to='/'>{t("navigation.home")}</Link>
        </Item>
        <SubMenu
          key='recent-cards'
          icon={<HistoryOutlined />}
          title={t("navigation.recent")}
          disabled={recentlyViewedCards.length === 0}
        >
          {recentlyViewedCards.slice(0, 8)?.map((card) => (
            <Item
              key={card.id}
              onClick={() =>
                cardsDispatch({
                  type: "addRecentCard",
                  data: { card },
                })
              }
            >
              <Link to={`/card/${card.id}`}>{`${card.name} · ${card.id}`}</Link>
            </Item>
          ))}
        </SubMenu>
      </StyledMenu>
    </StyledSider>
  );
};

export default Navigation;
