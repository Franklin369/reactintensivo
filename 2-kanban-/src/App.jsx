import "./App.css";
import  {Kanban}  from "./components/kanban/Kanban";
 function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Arrastrar y soltar REACT
      </h1>
      <Kanban/>
    </div>
  );
}

export default App;
