import "../style/App.css";
import Header from "./header";
import SwipeButtons from "./swipeButtons";
import TinderCard from "./tinderCard";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCard />
      <SwipeButtons />
    </div>
  );
}

export default App;
