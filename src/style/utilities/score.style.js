import styled from "styled-components";
import { neutralColor, primaryColor } from "../variable.style";

export const Score = {
  Wrapper: styled.div`
    width: 80px;
    height: 25px;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${neutralColor.lightGray};
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    left: 1rem;
    margin: 0 0 0.6rem 0;
    cursor: pointer;
  `,
  Votes: styled.div`
    color: ${primaryColor.moderateBlue};
    font-weight: 700;
  `,
};
