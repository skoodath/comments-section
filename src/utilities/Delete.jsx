import React from "react";
import { Delete } from "../style/utilities/delete.style";

const DeleteButton = ({ showDeleteConfirm }) => {
  return (
    <Delete.Wrapper onClick={showDeleteConfirm}>
      <img
        src="./images/icon-delete.svg"
        alt="Edit button to edit own comments"
      />
      <Delete.Caption>Delete</Delete.Caption>
    </Delete.Wrapper>
  );
};

export default DeleteButton;
