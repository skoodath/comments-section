import React from "react";
import { Score } from "../style/utilities/score.style";

const ScoreButton = ({ score, upVote, downVote }) => {
  return (
    <Score.Wrapper>
      <img
        src="./images/icon-plus.svg"
        alt="Plus button for up vote"
        onClick={upVote}
      />
      <Score.Votes>{score}</Score.Votes>
      <img
        src="./images/icon-minus.svg"
        alt="Minus button for down vote"
        onClick={downVote}
      />
    </Score.Wrapper>
  );
};

export default ScoreButton;
