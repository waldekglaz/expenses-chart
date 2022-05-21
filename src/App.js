import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppBody from "./components/AppBody/AppBody";

function App() {
  return (
    <main className="App">
      <div className="container">
        <AppHeader />
        <AppBody />
      </div>
    </main>
  );
}

export default App;
