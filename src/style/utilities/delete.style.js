import styled from "styled-components";
import { neutralColor, primaryColor } from "../variable.style";

export const Delete = {
  Wrapper: styled.div`
    width: 70px;
    height: 25px;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${neutralColor.white};
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    right: 6rem;
    margin: 0 0 0.6rem 0;
    cursor: pointer;
    &:hover {
      img {
        fill: ${primaryColor.paleRed};
      }
    }
  `,
  Caption: styled.div`
    color: ${primaryColor.softRed};
    font-weight: 700;
    &:hover {
      color: ${primaryColor.paleRed};
    }
  `,
};
