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
//import { Form } from "../style/components/form.style";

const RepliesComponent = ({ re, cid }) => {
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

      //console.log(filteredComments);
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
          <FormComponent
            image={currentUserImage.webp}
            username={currentUser}
            isReply={isReply}
          />
          {/* <Form.Wrapper>
            <Form.FormEl onSubmit={handleReply}>
              <Form.Text
                value={reply}
                onChange={handleChange}
                rows={4}
                placeholder="Reply to comment..."
              />
              <Form.Image src={currentUserImage.webp} alt={currentUser} />
              <Form.Button type="submit">Reply</Form.Button>
            </Form.FormEl>
          </Form.Wrapper> */}
        </>
      )}
    </>
  );
};

export default RepliesComponent;
