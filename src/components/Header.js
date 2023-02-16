import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = styled.header`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 930px;
`;

const Column = styled.div``;

const Icon = styled.span``;

const Button = styled.span``;

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Column>
          <FontAwesomeIcon icon={faInstagram}/>
        </Column>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;