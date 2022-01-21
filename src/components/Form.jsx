import React, { useState, useContext } from "react";
import CommentContext from "../context";
import { Form } from "../style/components/form.style";

const FormComponent = ({ image, username, isReply }) => {
  const [newComment, setNewComment] = useState("");

  const { comments, setComments, currentUser, currentUserImage } =
    useContext(CommentContext);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("comments") !== null) {
      const localComments = JSON.parse(localStorage.getItem("comments"));
      console.log(localComments);
      const addedComments = {
        id: comments.length + 1,
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
      setNewComment("");
    }
  };

  return (
    <Form.Wrapper>
      <Form.FormEl onSubmit={handleSubmit}>
        <Form.Text
          type="text"
          value={newComment}
          onChange={handleChange}
          rows={4}
          placeholder="Add a comment..."
        />
        <Form.Image src={image} alt={username} />
        <Form.Button type="submit">{isReply ? "Reply" : "Send"}</Form.Button>
      </Form.FormEl>
    </Form.Wrapper>
  );
};

export default FormComponent;
