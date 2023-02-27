import styled from "styled-components";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllFeeds, getUserFeeds } from "../api";

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
  position: relative;
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
  }
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

function Profile() {
  // const data = useLocation();
  // console.log("data", data);
  // /profile/admin

  // const data2 = useParams();
  // console.log("data2", data2);
  // admin
  // 이 링크 차이

  const { username } = useParams();
  console.log("username", username);
  // 객체 안에 있는 username값을 한 번에 가져오는 방식

  const { data } = useQuery(["feeds/", username], getUserFeeds);
  console.log("data", data);

  return (
    <>
      <Header>
        <ProfileImg
          src={data ? data[0].user.profileImg : ""}
          alt="profile img"
        ></ProfileImg>
        <ProfileInfo>
          <Row>
            <Username>{data ? data[0].user.username : ""}</Username>
            <FollowBtn>팔로우</FollowBtn>
          </Row>
          <Row>
            <div>3</div>
            <div>팔로우수</div>
            <div>10</div>
            <div>팔로잉수</div>
          </Row>
          <Row>
            <div>{data ? data[0].user.profileIntroduce : ""}</div>
          </Row>
        </ProfileInfo>
      </Header>
      <Contents>
        {data?.map((feed) => (
          <Feed bg={feed.contentImg}>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon={faHeart}>
                  {feed.likesNum}
                </FontAwesomeIcon>
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faComment}>
                  {feed.reviewsNum}
                </FontAwesomeIcon>
              </Icon>
            </Icons>
          </Feed>
        ))}
      </Contents>
    </>
  );
}

export default Profile;
