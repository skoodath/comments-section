import React from "react";
import { Confirm } from "../style/components/confirm.style";

const ConfirmDeleteComponent = ({ deleteComment }) => {
  return (
    <Confirm.Wrapper>
      <Confirm.Background></Confirm.Background>
      <Confirm.Inner>
        <Confirm.Title>Delete Comment</Confirm.Title>
        <Confirm.Message>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </Confirm.Message>
        <Confirm.ButtonContainer>
          <Confirm.Cancel onClick={deleteComment}>No, Cancel</Confirm.Cancel>
          <Confirm.Delete>Yes, Delete</Confirm.Delete>
        </Confirm.ButtonContainer>
      </Confirm.Inner>
    </Confirm.Wrapper>
  );
};

export default ConfirmDeleteComponent;
