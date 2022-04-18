import Footer from "./Footer";
import Header from "./Header";

type DashboardLayoutProps = {
    children: React.ReactNode,
}

const Layout = ({ children }: DashboardLayoutProps) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;