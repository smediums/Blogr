import React from "react";
import { Section, CTA } from "../../globalStyles";
import { Banner, CtaWrapper, HeroContent, Summary } from "./HeroStyles";

const Hero = () => {
  return (
    <Section
      bgColor="linear-gradient( hsl(13, 100%, 72%),hsl(353, 100%, 62%))"
      radius="0 0 0 7rem"
      hgt="75vh"
    >
      <HeroContent>
        <Banner>A modern publishing platform</Banner>
        <Summary>Grow your audience and build your online brand</Summary>
        <CtaWrapper>
          <CTA
            clr="hsl(356, 100%, 66%)"
            bg="#fff"
            hvrBg="hsl(355, 100%, 74%)"
            hvrClr="#fff"
          >
            Start for Free
          </CTA>
          <CTA
            clr="#fff"
            border="1px solid #fff"
            hvrBg="rgba(255,255,255,0.8)"
            hvrClr="hsl(356, 100%, 66%)"
          >
            Learn More
          </CTA>
        </CtaWrapper>
      </HeroContent>
    </Section>
  );
};

export default Hero;
