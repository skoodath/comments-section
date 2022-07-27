import React, { useState, useContext } from "react";
import { Replies } from "../style/components/replies.style";
import ScoreButton from "../utilities/ScoreButton";
import CommentContext from "../CommentContext";
import DeleteButton from "../utilities/DeleteButton";
import EditButton from "../utilities/EditButton";
import ReplyButton from "../utilities/ReplyButton";
import { You } from "../style/utilities/you.style";
import ConfirmDeleteComponent from "./ConfirmDelete";
import CommentForm from "./CommentForm";

const CommentReplies = ({ re, cid }) => {
  const { content, createdAt, user, score, id } = re;
  const { setComments, currentUser, currentUserImage } =
    useContext(CommentContext);

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

  const handleDelete = (e) => {
    e.preventDefault();
    if (localStorage.getItem("comments") !== null) {
      let localComments = JSON.parse(localStorage.getItem("comments"));
      const filteredComments = localComments
        .filter((comment) => comment.id === cid)
        .flatMap((c) => c.replies)
        .filter((r) => r.id !== id);

      let deletedReply = localComments.map((cmt) =>
        cmt.id === cid ? { ...cmt, replies: filteredComments } : cmt
      );
      localStorage.setItem("comments", JSON.stringify(deletedReply));
      setComments(deletedReply);
    }
    setShowDelete(false);
  };

  return (
    <>
      <Replies.Wrapper>
        <Replies.Inner>
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
        </Replies.Inner>
        {currentUser === user.username && (
          <DeleteButton showDeleteConfirm={showDeleteConfirm} />
        )}
        {currentUser === user.username && <EditButton />}
        <ScoreButton score={score} />
        {currentUser !== user.username && (
          <ReplyButton replyToComment={replyToDeepComment} isReply={isReply} />
        )}
        {showDelete && (
          <ConfirmDeleteComponent
            cancelDelete={cancelDelete}
            handleDelete={handleDelete}
          />
        )}
      </Replies.Wrapper>
      {isReply && (
        <>
          <CommentForm
            image={currentUserImage.webp}
            username={currentUser}
            isReply={isReply}
          />
        </>
      )}
    </>
  );
};

export default CommentReplies;
