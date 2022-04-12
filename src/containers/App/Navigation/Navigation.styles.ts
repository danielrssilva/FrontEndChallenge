import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";

export const StyledMenu = styled(Menu)`
  height: 100%;
`;
const StyledSider = styled(Sider)`
  height: 100vh;
  position: fixed;
`;

export default StyledSider;
