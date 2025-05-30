import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import Feed from './Components/Feed/Feed';
// import ProtectedRoute from './Components/Auth/ProtectedRoute';
import NotFound from './components/Common/NotFound';
import Login from './components/Auth/Login';
import AuthMain from './components/Auth/AuthMain';
import SignUp from './components/Auth/SignUp';
import Feed from './pages/Feed';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<AuthMain />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;