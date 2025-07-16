import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import AuthMain from './components/Auth/AuthMain';
import SignUp from './components/Auth/SignUp';

import Login from './Components/Auth/Login';
import MainLayout from './pages/MainLayout';
import { Home } from './pages/Home';

const BrowserRouter = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
     {
    path:'/auth',
    element:<AuthMain></AuthMain>
   },
   {
    path:'/signin',
    element:<Login></Login>
   },
   {
    path:'/signup',
    element:<SignUp></SignUp>
   }
])

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<AuthMain />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}
          {/* <Route path="/" element={<AuthMain />} /> */}
<RouterProvider router={BrowserRouter}></RouterProvider>
    </div>
  );
}

export default App;