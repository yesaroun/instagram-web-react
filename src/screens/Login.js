import styled from "styled-components";
import {darkModeVar} from "../apollo";

function Login() {

  // App.js에서 theme라는 props 보냄
  const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  // const Wrapper = styled.`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: flex-end;
  //   flex-wrap: wrap;
  //   height: 100px;
  // `
  const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `

  return (
    <div>
      <Container>
        <Title>로고</Title>
        <form action="">
          <FormWrapper>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input type="submit"/>
          </FormWrapper>
        </form>
        <button onClick={() => darkModeVar(true)}>Dark Mode</button>
        <button onClick={() => darkModeVar(false)}>Light Mode</button>
      </Container>
    </div>
  );
}

export default Login;