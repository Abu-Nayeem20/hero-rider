import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import JoinLearner from './Pages/JoinLearner/JoinLearner';
import JoinRider from './Pages/JoinRider/JoinRider';
import 'bootstrap/dist/css/bootstrap.min.css';
import RiderProfile from './Pages/RiderProfile/RiderProfile';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import LearnerProfile from './Pages/RiderProfile/LearnerProfile/LearnerProfile';

function App() {
  return (
    <div>
      <AuthProvider>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join_rider" element={<JoinRider />} />
        <Route path="/join_learner" element={<JoinLearner />} />
        <Route path="/rider_profile" element={<PrivateRoute>
          <RiderProfile />
        </PrivateRoute>} />
        <Route path="/learner_profile" element={<PrivateRoute>
          <LearnerProfile />
        </PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
