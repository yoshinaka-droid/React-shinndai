import { Route, Routes } from "react-router-dom";
import Header from './assets/Header.tsx';
import Body from './assets/Body.tsx';
import Detail from './assets/Detail.tsx';
import './App.css';

function App() {
  return (
    <div key="App">
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
