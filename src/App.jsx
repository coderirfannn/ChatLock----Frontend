import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Signup from './Components/Auth/Signup';
import Authmain from './Components/Auth/Authmain'
import Login from './Components/Auth/Login';
import Mainlayout from './pages/Mainlayout';
import { Home } from './pages/Home';

const BrowserRouter = createBrowserRouter([
  {
    path:'/',
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
     {
    path:'/auth',
    element:<Authmain></Authmain>
   },
   {
    path:'/signin',
    element:<Login></Login>
   },
   {
    path:'/signup',
    element:<Signup></Signup>
   }
])

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<AuthMain />} />
          <Route path="/sigdnin" element={<Login />} />
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