import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <button
        className="home"
        key="home"
        onClick={() => navigate("/")}
    >
        <span>戻る</span>
    </button>
  );
};

export default Home;