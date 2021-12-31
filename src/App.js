import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import JoinLearner from './Pages/JoinLearner/JoinLearner';
import JoinRider from './Pages/JoinRider/JoinRider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join_rider" element={<JoinRider />} />
        <Route path="/join_learner" element={<JoinLearner />} />
      </Routes>
    </div>
  );
}

export default App;
