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
import Packages from './Pages/Packages/Packages';
import Payment from './Pages/Payment/Payment';
import ThankYou from './Pages/ThankYou/ThankYou';
import Dashboard from './Pages/AdminDashboard/Dashboard/Dashboard';
import RiderUsers from './Pages/AdminDashboard/RiderUsers/RiderUsers';
import LearnerUsers from './Pages/AdminDashboard/LearnerUsers/LearnerUsers';

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
        <Route path="/packages" element={<PrivateRoute>
          <Packages />
          </PrivateRoute>} />
        <Route path="/thank_you" element={<PrivateRoute>
          <ThankYou />
          </PrivateRoute>} />
        <Route path="/payment/:id" element={<PrivateRoute>
          <Payment />
          </PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute>
          <Dashboard />
          </PrivateRoute>} />
        <Route path="/dashboard/rider_users" element={<PrivateRoute>
          <RiderUsers />
          </PrivateRoute>} />
        <Route path="/dashboard/learner_users" element={<PrivateRoute>
          <LearnerUsers />
          </PrivateRoute>} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
