import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Links from "../components/Links";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Header />
            <main className="flex flex-col relative">
                <Outlet />
                <Links />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
