import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";

function App() {
  const isLoggedIn = false;

  return (
  <Router>
    <Routes>
      <Route path="/" element={ isLoggedIn ? <Home/> : <Login/>}></Route>
      {/*<Route path="/home" element={<Home/>}></Route>*/}
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/signup" element={isLoggedIn ? null : <SignUp/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
