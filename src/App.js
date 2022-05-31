import { Outlet } from "react-router-dom";
import BookQuote from "./components/BookQuote";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen   min-h-screen max-w-[1440px] mx-auto">
      <Header />

      <Outlet />
    </div>
  );
}

export default App;
