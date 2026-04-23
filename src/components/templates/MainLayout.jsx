import { Outlet, useLocation } from "react-router-dom";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import ScrollToTopButton from "../../hooks/useScrollToTop";
import HomeHeader from "../organisms/HomeHeader";

const MainLayout = () => {
  const location = useLocation();
  const showHeaderRoutes = ["/"];

  return (
    <div className="min-h-dvh flex flex-col bg-mist-900">
      {showHeaderRoutes.includes(location.pathname) ? (
        <HomeHeader />
      ) : (
        <Header />
      )}

      <main className="flex-1 flex w-full min-h-0">
        <div className="flex-1 flex items-center justify-center min-h-0 w-full">
          <Outlet />
        </div>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
