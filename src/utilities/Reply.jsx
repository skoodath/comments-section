import React from "react";
import { Reply } from "../style/utilities/reply.style";

const ReplyButton = ({ replyToComment, isReply }) => {
  return (
    <Reply.Wrapper onClick={replyToComment}>
      <img src="./images/icon-reply.svg" alt="Plus button for up vote" />
      <Reply.Caption isReply={isReply}>Reply</Reply.Caption>
    </Reply.Wrapper>
  );
};

export default ReplyButton;
