import React, { useState, useContext } from "react";
import { Comments } from "../style/components/comments.style";
import DeleteButton from "../utilities/Delete";
import EditButton from "../utilities/Edit";
import ReplyButton from "../utilities/Reply";
import ScoreButton from "../utilities/Score";
import FormComponent from "./Form";
import RepliesComponent from "./Replies";
import CommentContext from "../context";
import { You } from "../style/utilities/you.style";
import ConfirmDeleteComponent from "./Confirm";

const CommentComponent = ({ c }) => {
  /* destructor comments object */
  const { content, createdAt, user, replies, score, id } = c;

  /* get state and setstate to map comments over to display */
  const {
    comments,
    setComments,
    newComment,
    setNewComment,
    currentUser,
    currentUserImage,
  } = useContext(CommentContext);

  /* Initiate states to manage reply form and delete confirmation */

  const [isReply, setIsReply] = useState(false);
  const [reply, setReply] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  /* function to toggle isReply state to show or hide reply form */

  const replyToComment = () => {
    setIsReply(!isReply);
  };
  /* function to toggle showDelete state to show or hide deletion confirmation dialog */
  const showDeleteConfirm = () => {
    setShowDelete(!showDelete);
  };

  /* function to cancel the confirm delete dialog  */

  const cancelDelete = () => {
    setShowDelete(false);
  };
  /* const confirmDelete = () => {
    setIsDelete(true);
  }; */

  const handleChange = (event) => {
    setReply("event.target.value");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (localStorage.getItem("comments") !== null) {
      const localComments = JSON.parse(localStorage.getItem("comments"));
      const filteredComments = localComments.filter(
        (comment) => comment.id !== id
      );
      localStorage.setItem("comments", JSON.stringify(filteredComments));
      setComments(filteredComments);
    }
    setShowDelete(false);
  };

  const handleReply = (e) => {
    e.preventDefault();
    if (localStorage.getItem("comments") !== null) {
      let localComments = JSON.parse(localStorage.getItem("comments"));
      let myReply = localComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [
                ...replies,
                {
                  id: Math.floor(new Date().getTime().toString()),
                  content: newComment,
                  createdAt: new Date().toLocaleString("en-us", {
                    hour: "numeric",
                    minute: "numeric",
                  }),
                  score: 0,
                  replyingTo: user.username,
                  user: {
                    image: {
                      png: currentUserImage.png,
                      webp: currentUserImage.webp,
                    },
                    username: currentUser,
                  },
                },
              ],
            }
          : comment
      );

      localStorage.setItem("comments", JSON.stringify(myReply));
      setComments(myReply);
      setNewComment("");
      setIsReply(false);
    }
  };

  /* Up and down vote functions */

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
          <Comments.UserImage src={user.image.webp} alt={user.username} />
          <Comments.UserName>{user.username}</Comments.UserName>
          {currentUser === user.username && (
            <You.Wrapper>
              <You.Text>You</You.Text>
            </You.Wrapper>
          )}
          <Comments.CreatedAt>{createdAt}</Comments.CreatedAt>
        </Comments.User>
        <Comments.Content>{content}</Comments.Content>
        {currentUser === user.username && (
          <DeleteButton showDeleteConfirm={showDeleteConfirm} />
        )}
        {currentUser === user.username && <EditButton />}
        {currentUser !== user.username && (
          <ScoreButton score={score} upVote={upVote} downVote={downVote} />
        )}
        {currentUser !== user.username && (
          <ReplyButton replyToComment={replyToComment} isReply={isReply} />
        )}
        {showDelete && (
          <ConfirmDeleteComponent
            cancelDelete={cancelDelete}
            handleDelete={handleDelete}
          />
        )}
      </Comments.Wrapper>
      {isReply && (
        <FormComponent
          isReply={isReply}
          handleChange={handleChange}
          handleSubmit={handleReply}
        />
      )}
      <Comments.ReplyWrapper>
        {replies &&
          replies.map((re) => (
            <RepliesComponent key={re.id} re={{ ...re }} isReply={isReply} />
          ))}
      </Comments.ReplyWrapper>
    </>
  );
};

export default CommentComponent;
