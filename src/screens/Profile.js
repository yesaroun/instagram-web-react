import styled from "styled-components";

const ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-radius: 20px;
`;

const ProfileContent = styled.div``;

const Header = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`

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
  margin-bottom: 20px;
`;


const ProfileInfo = styled.div``;


function Profile() {
  return (
    <div>
      <Header>
        <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRomNxzu2Qeojtpo4Rql1wLPaGTofuViEFJA&usqp=CAU"
               alt="">
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
    </div>
  );
}

export default Profile;