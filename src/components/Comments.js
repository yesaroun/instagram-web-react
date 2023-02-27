import styled from "styled-components";

const CommentsContainer = styled.div`
  margin-top: 20px;
`;
const CommentContainer = styled.div`
  margin-bottom: 15px;
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

function Comments({ author, caption, comments, commentNumber }) {
  return (
    <CommentsContainer>
      <CommentContainer>
        <CommentAuthor>{author}</CommentAuthor>
        <CommentContent>{caption}</CommentContent>
      </CommentContainer>

      <CommentCount>댓글 갯수: {commentNumber}개</CommentCount>

      {comments?.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentAuthor>{comment.user.username}</CommentAuthor>
          <CommentContent>{comment.rcaption}</CommentContent>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}

export default Comments;
