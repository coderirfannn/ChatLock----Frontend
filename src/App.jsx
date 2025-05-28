import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import Feed from './Components/Feed/Feed';
// import ProtectedRoute from './Components/Auth/ProtectedRoute';
import NotFound from './Components/Common/NotFound';
import Login from './Components/Auth/Login';
import AuthMain from './Components/Auth/AuthMain';
import SignUp from './Components/Auth/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<AuthMain />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Protected Routes */}
          {/* <Route 
            path="/feed" 
            element={
              
                // <Feed />
          
            } 
          /> */}
          
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;