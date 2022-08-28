import React from "react";
import styled from "styled-components";
import { BiHomeHeart } from "react-icons/bi";

const HeaderContailner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const ButtonStyle = styled.button`
  border: 0;
  background-color: white;
  size: 30;
`;

const Header = () => {
  return (
    <HeaderContailner>
      <ButtonStyle>
        <BiHomeHeart size="30" />
      </ButtonStyle>
      <h1>모두의 투두리스트</h1>
    </HeaderContailner>
  );
};
export default Header;
