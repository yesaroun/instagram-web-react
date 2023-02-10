import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";

import routes from "./routes";

// 테마 적용 라이브러리
import {ThemeProvider} from "styled-components";

const lightTheme = {
  fontColor: "#c2c2c2",
  bgColor: "lightgray",
};

const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#c2c2c2",
};

function App() {
  const isLoggedIn = false;
  const darkMode = false;

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Routes>
          <Route path={routes.home} element={isLoggedIn ? <Home/> : <Login/>}></Route>
          {/*<Route path="/home" element={<Home/>}></Route>*/}
          <Route path={routes.profile} element={<Profile/>}></Route>
          <Route path={routes.signUp} element={isLoggedIn ? null : <SignUp/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
    ;
}

export default App;
