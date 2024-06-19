import Header from "./Components/Header";
import Body from "./Components/Body";
import Page1 from "./Components/Page1";
import './App.css';

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    
    <div key="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/:id" element={<Page1 />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
