import React, { useState, useContext } from "react";
import { Replies } from "../style/components/replies.style";
import ScoreButton from "../utilities/Score";
import CommentContext from "../context";
import DeleteButton from "../utilities/Delete";
import EditButton from "../utilities/Edit";
import ReplyButton from "../utilities/Reply";
import { You } from "../style/utilities/you.style";
import ConfirmDeleteComponent from "./Confirm";
import FormComponent from "./Form";

const RepliesComponent = ({ re }) => {
  const { content, createdAt, user, score } = re;
  const { currentUser, currentUserImage } = useContext(CommentContext);
  const [showDelete, setShowDelete] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const replyToDeepComment = () => {
    setIsReply(!isReply);
  };

  const showDeleteConfirm = () => {
    setShowDelete(!showDelete);
  };

  const cancelDelete = () => {
    setShowDelete(false);
  };

  /* const upVote = () => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [
                { ...comment.replies, score: comment.replies.score + 1 },
              ],
            }
          : comment
      )
    );
  };
  const downVote = () => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [
                { ...comment.replies, score: comment.replies.score - 1 },
              ],
            }
          : comment
      )
    );
  }; */

  return (
    <>
      <Replies.Wrapper>
        <Replies.User>
          <Replies.UserImage src={user.image.webp} alt={user.username} />
          <Replies.UserName>{user.username}</Replies.UserName>
          {currentUser === user.username && (
            <You.Wrapper>
              <You.Text>You</You.Text>
            </You.Wrapper>
          )}
          <Replies.CreatedAt>{createdAt}</Replies.CreatedAt>
        </Replies.User>
        <Replies.Content>{content}</Replies.Content>

        {currentUser === user.username && (
          <DeleteButton showDeleteConfirm={showDeleteConfirm} />
        )}
        {currentUser === user.username && <EditButton />}
        {currentUser !== user.username && <ScoreButton score={score} />}
        {currentUser !== user.username && (
          <ReplyButton replyToComment={replyToDeepComment} isReply={isReply} />
        )}
        {showDelete && <ConfirmDeleteComponent cancelDelete={cancelDelete} />}
      </Replies.Wrapper>
      {isReply && (
        <FormComponent image={currentUserImage.webp} username={currentUser} />
      )}
    </>
  );
};

export default RepliesComponent;
