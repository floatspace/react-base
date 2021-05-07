import React, { useContext } from "react";
import "./index.scss";
import { ThemeContext } from "../../App";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title, children } = props;
  const theme = useContext(ThemeContext);
  console.log(theme);
  const themeStyle = {
    background: theme.background,
    color: theme.color,
  };
  return (
    <div className="header" style={themeStyle}>
      <h1 className="left">{title}</h1>
      <div className="right">{children}</div>
    </div>
  );
};

Header.defaultProps = {
  title: "HEADER",
};

export default Header;
