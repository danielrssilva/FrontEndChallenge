import styled from "styled-components";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Input as AntInput } from "antd";
import Theme from "../../theme/Theme";
import { BtnCloseProps } from "./SearchInput.types";

const { colors, spaces } = Theme;

export const Container = styled.div`
  border-radius: ${spaces.xs};
  width: 28rem;
`;

export const BorderInput = styled.div`
  height: ${spaces.lp};
  display: flex;
  align-items: center;

  border: 0.1rem solid ${colors.fillGraySecondary};
  border-radius: ${spaces.xs};
`;

export const Input = styled(AntInput)`
  width: 100%;
  padding: ${spaces.none};
  border: 0;
  outline: none;

  color: ${colors.fillGray};
  font-size: 1.4rem;
  text-align: left;
  line-height: 1.6rem;
  font-weight: 400;

  &:focus {
    border: 0;
    outline: none;
    border-color: inherit;
    box-shadow: none;
  }
`;

export const SearchIcon = styled(SearchOutlined).attrs(() => ({
  color: colors.fillGraySecondary,
}))`
  width: 1.6rem;
  height: 1.6rem;
  margin: 1.2rem;
`;

export const ClearIcon = styled(CloseOutlined).attrs(() => ({
  color: colors.fillGraySecondary,
}))``;

export const ClearBtn = styled.div<BtnCloseProps>`
  position: relative;
  margin: ${spaces.none} ${spaces.m};
  cursor: pointer;

  visibility: ${({ hasValue }) => (hasValue ? "visible" : "hidden")};
`;
