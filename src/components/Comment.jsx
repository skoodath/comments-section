import React, { useState, useContext } from "react";
import { Comments } from "../style/components/comments.style";
import DeleteButton from "../utilities/DeleteButton";
import EditButton from "../utilities/Edit";
import ReplyButton from "../utilities/Reply";
import ScoreButton from "../utilities/Score";
import CommentReplies from "./CommentReplies";
import CommentContext from "../CommentContext";
import { You } from "../style/utilities/you.style";
import ConfirmDelete from "./ConfirmDelete";
import { Form } from "../style/components/form.style";

const Comment = ({ c }) => {
  /* destructor comments object */
  const { content, createdAt, user, replies, score, id } = c;

  /* get state and setstate to map comments over to display */
  const { setComments, currentUser, currentUserImage } =
    useContext(CommentContext);

  /* Initiate states to manage reply form and delete confirmation */

  const [isReply, setIsReply] = useState(false);
  const [reply, setReply] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [error, setError] = useState(false);

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

  const handleChange = (event) => {
    setReply(event.target.value);
    setError(false);
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

  const getUniqueId = () => {
    return Math.floor(new Date().getTime() / 1000);
  }

  const handleReply = (e) => {
    e.preventDefault();
    if (reply.length <= 0) {
      setError(true);
    } else if (reply.length > 0) {
      setError(false);
      if (localStorage.getItem("comments") !== null) {
        let localComments = JSON.parse(localStorage.getItem("comments"));
        let myReply = localComments.map((comment) =>
          comment.id === id
            ? {
                ...comment,

                replies: [
                  ...replies,
                  {
                    id: getUniqueId(),
                    content: reply,
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
        setReply("");
        setIsReply(false);
      }
    }
  };

  /* Up and down vote functions */

  const upVote = () => {
    if (localStorage.getItem("comments") !== null) {
      let localComments = JSON.parse(localStorage.getItem("comments"));
      let myUpVote = localComments.map((comment) =>
        comment.id === id ? { ...comment, score: comment.score + 1 } : comment
      );
      localStorage.setItem("comments", JSON.stringify(myUpVote));
      setComments(myUpVote);
    }
  };
  const downVote = () => {
    if (localStorage.getItem("comments") !== null) {
      let localComments = JSON.parse(localStorage.getItem("comments"));
      let myDownVote = localComments.map((comment) =>
        comment.id === id ? { ...comment, score: comment.score - 1 } : comment
      );
      localStorage.setItem("comments", JSON.stringify(myDownVote));
      setComments(myDownVote);
    }
  };

  return (
    <>
      <Comments.Wrapper>
        <Comments.Inner>
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
        </Comments.Inner>
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
          <ConfirmDelete
            cancelDelete={cancelDelete}
            handleDelete={handleDelete}
          />
        )}
      </Comments.Wrapper>
      {isReply && (
        <Form.Wrapper>
          <Form.FormEl onSubmit={handleReply}>
            <Form.Text
              value={reply}
              onChange={handleChange}
              rows={4}
              placeholder="Reply to comment..."
            />
            <Form.Image src={currentUserImage.webp} alt={currentUser} />
            <Form.Button type="submit">Reply</Form.Button>
            {error && <Form.Error>Comments field is empty</Form.Error>}
          </Form.FormEl>
        </Form.Wrapper>
      )}
      <Comments.ReplyWrapper>
        {replies &&
          replies.map((re) => (
            <CommentReplies
              key={re.id}
              re={{ ...re }}
              isReply={isReply}
              cid={id}
            />
          ))}
      </Comments.ReplyWrapper>
    </>
  );
};

export default Comment;
