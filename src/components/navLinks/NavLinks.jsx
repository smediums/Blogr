import { Label, List, ListItem } from "./NavLinksStyles";

const NavLinks = (props) => {
  return (
    <>
      <Label htmlFor={props.label} colour={props.textClr} onClick={props.clicked}>
        {props.label} {props.arrow}
      </Label>
      <List className={props.showClass}>
        {props.list.map((word) => (
          <ListItem key={word} onClick={props.close}>{word}</ListItem>
        ))}
      </List>
    </>
  );
};

export default NavLinks;
