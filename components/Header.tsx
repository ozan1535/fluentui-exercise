import { ThemeProvider, PartialTheme } from "@fluentui/react";
import Link from "next/link";
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";

const headerTheme: PartialTheme = {
  palette: {
    themePrimary: 'gray',
  },
  semanticColors: {
    bodyBackground: 'black',
    bodyText: 'white',
    primaryButtonBackground: "green",
    primaryButtonBackgroundHovered: "lightblue",
    primaryButtonBackgroundPressed: "red",
    primaryButtonText: "blue",
    primaryButtonTextHovered: "green"
  }
};


/* 
const styles: IButtonStyles = {
  root: [
    {
      background: '#525CA3',
      border: "none",
      borderRadius: '10px',
    }
  ],
};

const btnStyles = {
  rootHovered: {
    backgroundColor: "red",
    border: "none"
  }
}; */

const Header: React.FunctionComponent = () => {

  return (
    <ThemeProvider style={{
      height: "75px",
      fontSize: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
      theme={headerTheme}
    >
      <div style={{
        width: "500px",
        display: "flex",
        justifyContent: "space-between"
      }}
      >
        <Link href="/"><PrimaryButton text="Home" /></Link>
        <Link href="/about"><PrimaryButton  text="About" /></Link>
        <Link href="/contact"><PrimaryButton text="Contact" /></Link>
        <Link href="/user"><PrimaryButton text="User" /></Link>
      </div>
    </ThemeProvider>
  );
}

export default Header;
