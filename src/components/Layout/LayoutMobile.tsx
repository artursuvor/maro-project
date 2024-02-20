import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMobile from "../Header/HeaderMobile.tsx";
import FooterMobile from "../Footer/FooterMobile.tsx";

const LayoutMobile: React.FC = () => {
    return (
        <div className="site-wrapper">
            <HeaderMobile />
            <main>
                <Outlet />
            </main>
            <FooterMobile />
        </div>
    );
};

export default LayoutMobile;
