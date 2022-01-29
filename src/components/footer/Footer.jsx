import React, { useContext } from "react";
import { NavLinks } from "..";
import { LinksContext } from "../../App";
import { Section, LogoWrapper } from "../../globalStyles";
import { Logo } from "../../icons/icons";
import { FooterContent } from "./FooterStyles";

const Footer = () => {
  const theList = useContext(LinksContext)

  return (
    <Section bgColor="hsl(240, 10%, 16%)" radius="0 7rem 0 0">
      <FooterContent padTop="3rem">
        <LogoWrapper
          margB="3rem"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo />
        </LogoWrapper>

        <NavLinks showClass='show' list={theList[0]} label='product'/>
        <NavLinks showClass='show' list={theList[1]} label='company'/>
        <NavLinks showClass='show' list={theList[2]} label='connect'/>
      </FooterContent>
    </Section>
  );
};

export default Footer;
