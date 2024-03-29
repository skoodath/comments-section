import React, { useEffect, useState } from "react";
import data from "../data";
import CommentForm from "./CommentForm";
import { Landing } from "../style/components/landing.style";
import Comment from "./Comment";
import CommentContext from "../CommentContext";
import getUniqueId from "../utilities/getuniqueid";

const LandingPage = () => {
  const currentUser = data.currentUser.username;
  const currentUserImage = data.currentUser.image;

  const [comments, setComments] = useState(data.comments);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("comments") === null) {
      localStorage.setItem("comments", JSON.stringify(data.comments));
    } else {
      const allcomments = JSON.parse(localStorage.getItem("comments"));
      setComments(allcomments);
    }
  }, []);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.length <= 0) {
      setError(true);
    }
    if (newComment.length > 0) {
      setError(false);
      if (localStorage.getItem("comments") !== null) {
        const localComments = JSON.parse(localStorage.getItem("comments"));

        const addedComments = {
          id: getUniqueId(),
          content: newComment,
          replies: [],
          createdAt: new Date().toLocaleString("en-us", {
            hour: "numeric",
            minute: "numeric",
          }),
          score: 0,
          user: {
            image: {
              png: currentUserImage.png,
              webp: currentUserImage.webp,
            },
            username: currentUser,
          },
        };
        localComments.push(addedComments);
        localStorage.setItem("comments", JSON.stringify(localComments));
        setComments(localComments);
      }
      setNewComment("");
    }
  };

  return (
    <CommentContext.Provider
      value={{
        currentUser,
        currentUserImage,
        comments,
        newComment,
        setNewComment,
        setComments,
        handleSubmit,
        handleChange,
      }}
    >
      <Landing.Wrapper>
        {comments.map((comment) => (
          <Comment c={comment} key={comment.id} />
        ))}
        <CommentForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
      </Landing.Wrapper>
    </CommentContext.Provider>
  );
};

export default LandingPage;
