import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎬Películas</h1>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
