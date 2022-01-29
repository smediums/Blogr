import styled from "styled-components";

export const FooterContent = styled.div`
  width: 90%;
  height: 100%;
  padding-top: ${({ padTop }) => (padTop ? padTop : 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// export const List = styled.ul`
//   padding: 1rem 0;
//   margin-bottom: 1.8rem;
//   color: #fff;
//   font-weight: 100;
//   text-align: center;
// `;

// export const ListItem = styled.li`
// color: hsl(240, 2%, 79%);
//   padding: 0.3rem 1rem;
//   margin: 0.5rem 0;
// `;

// export const Label = styled.label`
//   color: #fff;
//   font-weight: 700;
// `;
