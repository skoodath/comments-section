import React from "react";
import { Edit } from "../style/utilities/edit.style";

const EditButton = () => {
  return (
    <Edit.Wrapper>
      <img
        src="./images/icon-edit.svg"
        alt="Edit button to edit own comments"
      />
      <Edit.Caption>Edit</Edit.Caption>
    </Edit.Wrapper>
  );
};

export default EditButton;
