import BookCategories from "./components/BookCategories";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto">
      <Homepage />
      <BookCategories />
    </div>
  );
}

export default App;
