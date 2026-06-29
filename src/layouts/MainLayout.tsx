import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
        {/* Navbar nanti di sini */}

        <main>
            <Outlet />
        </main>

        {/* Footer nanti di sini */}
        </>
    );
}

export default MainLayout;