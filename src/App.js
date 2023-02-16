/* routes */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import Layout from "./components/Layout";

/* styled-component */
import routes from "./routes";

/* styled-component */
// 테마 적용 라이브러리
import {ThemeProvider} from "styled-components";

/* apollo - reactive variables */
// apollo를 사용하기 위해서는 이걸 불러와야 한다.
import {useReactiveVar} from "@apollo/client";
// apollo 변수 불러오기
import {isLoggedInVar, darkModeVar} from "./apollo";
import {lightTheme, darkTheme, GlobalStyles} from "./styles";


function App() {
  // 전역 변수를 데려왔다.
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles/> {/* 이렇게 하면 전체적으로 리셋이 적용된다 */}
      <Router>
        <Routes>
          <Route path={routes.home} element={isLoggedIn ? <Layout><Home/></Layout> : <Login/>}></Route>
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
