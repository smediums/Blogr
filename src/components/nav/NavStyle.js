import styled from "styled-components";

export const Navigation = styled.nav`
  padding: 1.5rem;
  position: fixed;
  top: calc(60px + 2.3rem);
  width: 90vw;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 12px rgba(31, 31, 31, 0.4);
  opacity: 0;
  pointer-events: "none";
  transition: 0.2s ease-in-out all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-center: center;
  z-index: -1;

  &.show {
    opacity: 1;
    pointer-events: "initial";
    z-index: 1;
  }
`;

export const Account = styled.div `
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Links = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-bottom: 1px solid hsl(240, 2%, 79%);
`
