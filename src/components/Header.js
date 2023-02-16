import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane, faUser} from "@fortawesome/free-regular-svg-icons";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 18px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 930px;
`;

const Column = styled.div``;

const Icon = styled.span`
  margin-left: 5px;
`;

const Button = styled.span``;

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Column>
          <FontAwesomeIcon size="2x" icon={faInstagram}/>
        </Column>
        <Column>
          <Icon>
            <FontAwesomeIcon size="lg" icon={faHome}/>
          </Icon>
          <Icon>
            <FontAwesomeIcon size="lg" icon={faPaperPlane}/>
          </Icon>
          <Icon>
            <FontAwesomeIcon size="lg" icon={faUser}/>
          </Icon>
        </Column>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;