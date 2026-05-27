import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
  <>
  <NavBar />
  <div className="grid md:grid-cols-[250px_1fr]">
    <div className="hidden md:block md:bg-blue-500">sidebar</div>
    <div className="">
      <GameGrid />
    </div>
  </div>
  </>
  )
}

export default App;
