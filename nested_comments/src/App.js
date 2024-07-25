import "./App.css";
import CommentTree from "./Components";
import comments from "./Components/data";

function App() {
  return (
    <div className="App">
      <CommentTree data={comments} />
    </div>
  );
}

export default App;
