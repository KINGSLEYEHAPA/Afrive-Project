import BookCategories from "./components/BookCategories";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="min-h-screen max-w-[1440px] mx-auto min-height-[60vh]  ">
      <Homepage />
      <BookCategories />
    </div>
  );
}

export default App;
