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
  const { image, username } = user;

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

  return (
    <>
      <Replies.Wrapper>
        <Replies.User>
          <Replies.UserImage src={image.webp} alt={username} />
          <Replies.UserName>{username}</Replies.UserName>
          {currentUser === username && (
            <You.Wrapper>
              <You.Text>You</You.Text>
            </You.Wrapper>
          )}
          <Replies.CreatedAt>{createdAt}</Replies.CreatedAt>
        </Replies.User>
        <Replies.Content>{content}</Replies.Content>
        {currentUser === username && (
          <DeleteButton showDeleteConfirm={showDeleteConfirm} />
        )}
        {currentUser === username && <EditButton />}
        <ScoreButton score={score} />
        {currentUser !== username && (
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
