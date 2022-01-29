import React, { useState } from "react";
import { LogoWrapper } from "../../globalStyles";
import { Close, HamMenu, Logo } from "../../icons/icons";
import { HeaderContent, Toggler } from "./HeaderStyles";

const Header = ({showNav, setShowNav}) => {

  return (
    <HeaderContent>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Toggler onClick={() => setShowNav(!showNav)}>
        {showNav == false ? <HamMenu /> : <Close />}
      </Toggler>
    </HeaderContent>
  );
};

export default Header;
