import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        list-style: none;
    }
`;

export const LogoWrapper = styled.div`
cursor: pointer;
  margin-bottom: ${({ margB }) => (margB ? margB : 0)};
`;

export const Section = styled.section`
  width: 100vw;
  height: ${({ hgt }) => (hgt ? hgt : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  border-radius: ${({ radius }) => (radius ? radius : 0)};
`;

export const CTA = styled.button`
  border-radius: 22px;
  padding: 0.8rem 1.1rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  color: ${({ clr }) => (clr ? clr : "#eee")};
  border: ${({ border }) => (border ? border : "none")};
  background: ${({ bg }) => (bg ? bg : "transparent")};
  transition: 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ hvrBg }) => (hvrBg ? hvrBg : '')};
    color: ${({ hvrClr }) => (hvrClr ? hvrClr : "initial")};
  }
`;

export default GlobalStyle;
