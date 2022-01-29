import { Account, Links, Navigation } from "./NavStyle";
import { CTA } from "../../globalStyles";
import { NavLinks } from "..";
import { useContext } from "react";
import { LinksContext } from "../../App";
import { Arrow } from "../../icons/icons";

const Nav = ({ showNav, setShowNav }) => {
  const theList = useContext(LinksContext);
  const navHeadings = ["product", "company", "connect"];

  const handleClick = (e) => {
    const labelList = e.currentTarget.nextElementSibling;
    const siblings = [...e.currentTarget.parentElement.children];

    siblings.map((sibs) => {
      if (sibs !== labelList) {
        sibs.classList.remove("show");
      }
    });
    labelList.classList.toggle("show");
  };


  return (
    <Navigation className={showNav == false ? "" : "show"}>
      <Links>
        {navHeadings.map((heading) => (
          <NavLinks
            list={theList[navHeadings.indexOf(heading)]}
            label={heading}
            textClr="hsl(208, 49%, 24%)"
            clicked={handleClick}
            close={() => setShowNav(!showNav)}
            arrow={<Arrow />}
            key={heading}
          />
        ))}
      </Links>
      <Account>
        <CTA>Login</CTA>
        <CTA
          clr="#fff"
          bg="linear-gradient(120deg, hsl(13, 100%, 72%),hsl(353, 100%, 62%))"
          hvrClr="hsl(207, 13%, 34%)"
          hvrBg="linear-gradient(-120deg, hsl(13, 100%, 72%),hsl(353, 100%, 62%))"
        >
          Sign up
        </CTA>
      </Account>
    </Navigation>
  );
};

export default Nav;
