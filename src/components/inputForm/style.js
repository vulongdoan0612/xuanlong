import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputStyle = styled(Input)`
  width: 96%;
  padding: 1rem 0px;
  margin: 5px;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  &:focus {
    background-color: rgb(232, 240, 254);
  }
`;
