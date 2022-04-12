import React from "react";
import { Col, Tag } from "antd";
import pokeTypesAndColors from "../constants/pokeTypesAndColors";
import { ModifierI } from "../interfaces/resources/CardResource";

const buildColoredTag = (array: string[] | ModifierI[]) => {
  return array.map((value) => {
    const typeChecker = typeof value !== "string";
    return (
      <Col key={typeChecker ? value.type : value}>
        <Tag
          color={
            pokeTypesAndColors.find(
              ({ type }) => type === (typeChecker ? value.type : value)
            )?.color
          }
          data-testId='card-tag'
        >
          {typeChecker ? `${value.type} ${value.value}` : value}
        </Tag>
      </Col>
    );
  });
};
export default buildColoredTag;
