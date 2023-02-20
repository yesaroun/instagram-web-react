import styled from "styled-components";
import {faComment, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-radius: 20px;
`;

const ProfileContent = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ProfileImg = styled.img`
  margin-left: 50px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-right: 80px;
  background-color: #2c2c2c;
`;

const Username = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const FollowBtn = styled.span`
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ProfileInfo = styled.div``;

const Contents = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const Feed = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position:relative;
`;

const Icons = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: {
    left: 5px;
    right: 5px;
  };
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

function Profile() {
  return (
    <>
      <Header>
        <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRomNxzu2Qeojtpo4Rql1wLPaGTofuViEFJA&usqp=CAU" alt="profile img">
        </ProfileImg>
        <ProfileInfo>
          <Row>
            <Username>유저명</Username>
            <FollowBtn>팔로우</FollowBtn>
          </Row>
          <Row>
            <div>3</div>
            <div>팔로우수</div>
            <div>10</div>
            <div>팔로잉수</div>
          </Row>
          <Row>
            <div>소개글</div>
          </Row>
        </ProfileInfo>
      </Header>
      <Contents>
        <Feed bg="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfU91C%2FbtrroyqLD6T%2FDjcxlQNMDVU42HdICxYL0k%2Fimg.png">
          <Icons>
            <Icon><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></Icon>
            <Icon><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></Icon>
          </Icons>
        </Feed>
      </Contents>
    </>
  );
}

export default Profile;