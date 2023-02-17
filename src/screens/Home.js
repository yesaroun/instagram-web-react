import styled from "styled-components";
import Avatar from "../components/Avartar";
import Comments from "../components/Comments";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as SolidHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faComment, faPaperPlane, faBookmark} from "@fortawesome/free-regular-svg-icons";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  margin-bottom: 60px;
  max-width: 650px;
  background-color: white;
`;

const FeedHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid rgba(239, 239, 239);
`;

const Nickname = styled.div`
  margin-left: 10px;
  font-weight: 600;
`;

const FeedPhoto = styled.img`
  width: 100%;
  max-width: 100%;
`;

const FeedAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const FeedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const FeedActionContainer = styled.div`
  padding: 12px 15px;
`;

const Likes = styled.span`
  font-weight: 600;
  margin-top: 15px;
  display: block;
`;


function Home() {
  return (
    <FeedContainer>
      <FeedHeader>
        <Avatar
          lg
          url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenaqua.hu%2Fen%2Fhal-sziami-harcoshal-betta-splendens-dumbo.html&psig=AOvVaw2MQ-lkIZ-dEKY_Izsofbf2&ust=1676622423958000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiLkbbPmf0CFQAAAAAdAAAAABAD"
        />
        <Nickname>Nickname</Nickname>
      </FeedHeader>
      <FeedPhoto
        src="https://wooarts.com/wp-content/uploads/sites/1/nggallery/amazing-beta-fish/amazing-beta-fish-shots-wooarts-01.jpg"/>
      <FeedActionContainer>
        <FeedWrapper>
          <div>
            <FeedAction>
              <FontAwesomeIcon style={{color: true ? "tomato" : "inherit"}} icon={true ? SolidHeart : faHeart}/>
            </FeedAction>
            <FeedAction>
              <FontAwesomeIcon size="lg" icon={faComment}/>
            </FeedAction>
            <FontAwesomeIcon size="lg" icon={faPaperPlane}/>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faBookmark}/>
          </div>
        </FeedWrapper>

        <Likes>likes</Likes>
        <Comments/>
      </FeedActionContainer>
    </FeedContainer>
  );
}

export default Home;
