import Homepage from "./components/Homepage";
import LikedBooks from "./components/LikedBooks";

function App() {
  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto">
      <Homepage />

      <LikedBooks />
    </div>
  );
}

export default App;
