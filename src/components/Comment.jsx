import React, { useState, useContext } from "react";
import { Comments } from "../style/components/comments.style";
import DeleteButton from "../utilities/Delete";
import EditButton from "../utilities/Edit";
import ReplyButton from "../utilities/Reply";
import ScoreButton from "../utilities/Score";
import FormComponent from "./Form";
import RepliesComponent from "./Replies";
import data from "../data";
import CommentContext from "../context";
import { You } from "../style/utilities/you.style";
import ConfirmDeleteComponent from "./Confirm";

const CommentComponent = ({ c }) => {
  const { content, createdAt, user, replies, score, id } = c;

  const { image, username } = user;
  const currentUser = data.currentUser;
  const { comments, setComments } = useContext(CommentContext);

  const [isReply, setIsReply] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const replyToComment = () => {
    setIsReply(!isReply);
  };

  const deleteComment = () => {
    setIsDelete(!isDelete);
  };

  const upVote = () => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, score: comment.score + 1 } : comment
      )
    );
  };
  const downVote = () => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, score: comment.score - 1 } : comment
      )
    );
  };

  return (
    <>
      <Comments.Wrapper>
        <Comments.User>
          <Comments.UserImage src={image.webp} alt={username} />
          <Comments.UserName>{username}</Comments.UserName>
          {currentUser.username === username && (
            <You.Wrapper>
              <You.Text>You</You.Text>
            </You.Wrapper>
          )}
          <Comments.CreatedAt>{createdAt}</Comments.CreatedAt>
        </Comments.User>
        <Comments.Content>{content}</Comments.Content>
        {currentUser.username === username && (
          <DeleteButton deleteComment={deleteComment} />
        )}
        {currentUser.username === username && <EditButton />}
        <ScoreButton score={score} upVote={upVote} downVote={downVote} />
        {currentUser.username !== username && (
          <ReplyButton replyToComment={replyToComment} isReply={isReply} />
        )}
        {isDelete && <ConfirmDeleteComponent deleteComment={deleteComment} />}
      </Comments.Wrapper>
      {isReply && (
        <FormComponent
          image={currentUser.image.webp}
          username={currentUser.username}
          isReply={isReply}
        />
      )}
      <Comments.ReplyWrapper>
        {replies &&
          replies.map((re) => (
            <RepliesComponent key={re.id} re={re} isReply={isReply} />
          ))}
      </Comments.ReplyWrapper>
    </>
  );
};

export default CommentComponent;
