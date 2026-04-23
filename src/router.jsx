import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./components/templates/MainLayout";
import HomePage from "./pages/Home";
import MainDashboard from "./pages/MainDashboard";
import StudentProfile from "./components/organisms/StudentProfile";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "dashboard", element: <MainDashboard /> },
        ],
      },
    ],
  },
]);
