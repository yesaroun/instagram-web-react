
import styled from "styled-components";

const CommentsContainer = styled.div`
  margin-top: 20px;
`;
const CommentContainer = styled.div`
  margin-bottom: 15px
`;
const CommentCount = styled.span`
  display: block;
  opacity: 0.7;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CommentAuthor = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;
const CommentContent = styled.span``;

function Comments() {
  return (
      <CommentsContainer>
        <CommentContainer>
          <CommentAuthor>작성자</CommentAuthor>
          <CommentContent>올해는 검은 토끼의 해입니다~</CommentContent>
        </CommentContainer>
        <CommentCount>댓글 갯수: 1개</CommentCount>
        <CommentContainer>
          <CommentAuthor>댓글1</CommentAuthor>
          <CommentContent>그렇군요~</CommentContent>
        </CommentContainer>
      </CommentsContainer>
  )
}

export default Comments;