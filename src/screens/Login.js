import styled from "styled-components";
import {darkModeVar} from "../apollo";

function Login() {

  // App.js에서 theme라는 props 보냄
  const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
  `;

  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  return (
    <div>
      <Container>
        <Title>hi!</Title>
        <form action="">
          <input type="email"/>
          <input type="password"/>
          <input type="submit"/>
        </form>
        <button onClick={() => darkModeVar(true)}>Dark Mode</button>
        <button onClick={() => darkModeVar(false)}>Light Mode</button>
      </Container>
    </div>
  );
}

export default Login;