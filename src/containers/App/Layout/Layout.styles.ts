import styled from "styled-components";

const mainHeight = "100vh";

const Main = styled.main({
  overflowY: "auto",
  minHeight: mainHeight,
  height: mainHeight,
  maxHeight: mainHeight,
  width: "calc(100vw - 8rem)",
  float: "right",
});

export default Main;
