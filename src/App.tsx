import NavBar from "./components/NavBar";

function App() {
  return (
  <>
  <div className=" min-h-screen grid md:grid-cols-[250px_1fr]">
    <div className="hidden md:block md:bg-blue-500">sidebar</div>
    <div className="bg-red-500">Body</div>
  </div>
  </>
  )
}

export default App;
