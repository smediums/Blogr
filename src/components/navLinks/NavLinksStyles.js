import styled from "styled-components";

export const List = styled.ul`
  padding: 1rem 0;
  margin-bottom: 1.8rem;

  font-weight: 100;
  text-align: center;
  height: 0;
  overflow: hidden;

  &.show {
    height: auto;
  }
`;

export const ListItem = styled.li`
  color: hsl(240, 2%, 79%);
  padding: 0.3rem 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
`;

export const Label = styled.label`
  color: ${({ colour }) => (colour ? colour : "#fff")};
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
`;
