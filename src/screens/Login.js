import styled from "styled-components";

function Login() {

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4em;
  `;

  return (
    <div>
      <Wrapper>
        <Title>hi!</Title>
        <form action="">
          <input type="email"/>
          <input type="password"/>
          <input type="submit"/>
        </form>
        hihihi
        {/*<button onClick={}/>*/}
        {/*<button onClick={}/>*/}
      </Wrapper>
    </div>
  );
}

export default Login;