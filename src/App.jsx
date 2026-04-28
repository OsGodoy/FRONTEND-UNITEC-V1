import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { SearchProvider } from "./contexts/searchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Toaster richColors position="top-center" />
        <Outlet />
      </SearchProvider>
    </>
  );
}

export default App;
