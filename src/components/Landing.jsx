import React, { useEffect, useState } from "react";
import data from "../data";
import FormComponent from "./Form";
import { Landing } from "../style/components/landing.style";
import CommentComponent from "./Comment";
import CommentContext from "../context";

const LandingComponent = () => {
  const currentUser = data.currentUser;

  const [comments, setComments] = useState(data.comments);

  useEffect(() => {
    if (localStorage.getItem("comments") === null) {
      localStorage.setItem("comments", JSON.stringify(data.comments));
    } else {
      const allcomments = JSON.parse(localStorage.getItem("comments"));
      setComments(allcomments);
    }
  }, []);

  return (
    <CommentContext.Provider
      value={{
        currentUser: currentUser.username,
        currentUserImage: currentUser.image,
        comments,
        setComments,
      }}
    >
      <Landing.Wrapper>
        {comments.map((c) => (
          <CommentComponent c={{ ...c }} key={c.id} />
        ))}
        <FormComponent
          image={currentUser.image.webp}
          username={currentUser.username}
        />
      </Landing.Wrapper>
    </CommentContext.Provider>
  );
};

export default LandingComponent;
