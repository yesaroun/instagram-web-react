import styled from "styled-components";
import Avatar from "../components/Avartar";
import Comments from "../components/Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  margin: 0 auto;
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

function Feed({
  id,
  // file,
  contentImg,
  caption,
  user,
  likesNum,
  reviewsNum,
  reviews,
  isLiked,
}) {
  return (
    <FeedContainer>
      <FeedHeader>
        <Avatar lg url={user.profileImg} />
        <Link to={`/profile/${user.username}`}>
          <Nickname>{user.username}</Nickname>
        </Link>
      </FeedHeader>
      {/*<FeedPhoto src={file} />*/}
      <FeedPhoto src={contentImg} />
      <FeedActionContainer>
        <FeedWrapper>
          <div>
            <FeedAction>
              <FontAwesomeIcon
                style={{ color: isLiked ? "tomato" : "inherit" }}
                icon={isLiked ? SolidHeart : faHeart}
              />
            </FeedAction>
            <FeedAction>
              <FontAwesomeIcon size="lg" icon={faComment} />
            </FeedAction>
            <FontAwesomeIcon size="lg" icon={faPaperPlane} />
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faBookmark} />
          </div>
        </FeedWrapper>

        <Likes>{likesNum} likes</Likes>
        <Comments
          key={id}
          author={user.username} // ?????????
          caption={caption} // ????????????
          comments={reviews} // ????????? (???????????????, ????????????)
          commentNumber={reviewsNum} // ?????? ??????
        />
        {/*{comments?.map((comment) => (*/}
        {/*  <Comments key={comment.id} {...comment} />*/}
        {/*))}*/}
      </FeedActionContainer>
    </FeedContainer>
  );
}

export default Feed;
