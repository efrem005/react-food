import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="container content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};