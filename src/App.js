import { useState } from "react";
import { Outlet } from "react-router-dom";
import BookQuote from "./components/BookQuote";
import Header from "./components/Header";

function App() {
  const [showCategories, setShowCategories] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [showEbookMenu, setShowEbookMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-screen   min-h-screen max-w-[1440px] mx-auto">
      <Header
        showCategories={showCategories}
        setShowCategories={setShowCategories}
        showEbookMenu={showEbookMenu}
        setShowEbookMenu={setShowEbookMenu}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        showProfileInfo={showProfileInfo}
        setShowProfileInfo={setShowProfileInfo}
      />

      <div
        onClick={() => {
          setShowCategories(false);
          setShowEbookMenu(false);
          setShowProfileInfo(false);
          setShowSearch(false);
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
