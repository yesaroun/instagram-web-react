import styled from "styled-components";
import Header from './Header';

const Content = styled.div`
  width: 100%;
  max-width: 930px;
  margin: 0 auto;
  margin-top: 45px;
`;

function Layout({children}) {

  console.log(children);

  return (
    <>
      <Header/>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
