import Header from "./Components/Header";
import Body from "./Components/Body";
import Detail from "./Components/Detail";
import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div key="App">
      <Header />
      <h3>sample</h3>

      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>

      {/* <h2>aaa</h2> */}
    </div>
  );
}

export default App;
