import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Detail from "./Components/Detail";
import './App.css';


function App() {
  return (
    <div key="App">
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
