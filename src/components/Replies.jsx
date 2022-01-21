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
  const [isDelete, setIsDelete] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const replyToDeepComment = () => {
    setIsReply(!isReply);
  };

  const deleteComment = () => {
    setIsDelete(!isDelete);
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
          <DeleteButton deleteComment={deleteComment} />
        )}
        {currentUser === username && <EditButton />}
        <ScoreButton score={score} />
        {currentUser !== username && (
          <ReplyButton replyToComment={replyToDeepComment} isReply={isReply} />
        )}
        {isDelete && <ConfirmDeleteComponent deleteComment={deleteComment} />}
      </Replies.Wrapper>
      {isReply && (
        <FormComponent image={currentUserImage.webp} username={currentUser} />
      )}
    </>
  );
};

export default RepliesComponent;
