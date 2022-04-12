import { ThemeProvider, PartialTheme } from "@fluentui/react";
import Link from "next/link";
import { PrimaryButton } from "@fluentui/react/lib/Button";

const headerTheme: PartialTheme = {
  palette: {
    themePrimary: 'gray',
  },
  semanticColors: {
    bodyBackground: 'black',
    bodyText: 'white',
  },
};

const Header: React.FunctionComponent = () => {

  return (
    <ThemeProvider style={{ 
      height: "75px", 
      fontSize: "20px", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center" }} 
      theme={headerTheme}
    >
      <div style={{ 
        width: "500px", 
        display: "flex", 
        justifyContent: "space-between" }}
      >
        <Link href="/"><PrimaryButton text="Home" /></Link>
        <Link href="/about"><PrimaryButton text="About" /></Link>
        <Link href="/contact"><PrimaryButton text="Contact" /></Link>
      </div>
    </ThemeProvider>
  );
}

export default Header;
