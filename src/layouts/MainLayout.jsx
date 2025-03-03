import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <>
            {/* <Navbar/>
            <Header />
            <main className="flex flex-col">
                <Outlet />
            </main> */}
            <Footer />
        </>

    );
};

export default MainLayout;
