import styled from "styled-components";

export const HeroContent = styled.div`
  color: hsl(0, 0%, 100%);
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const Summary = styled.p`
  font-weight: 200;
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
`;

export const CtaWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
