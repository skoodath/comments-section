import styled from "styled-components";
import { neutralColor, primaryColor } from "../variable.style";

export const Edit = {
  Wrapper: styled.div`
    width: 60px;
    height: 25px;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${neutralColor.white};
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    right: 1rem;
    margin: 0 0 0.6rem 0;
    cursor: pointer;
    &:hover {
      svg {
        path {
          
            fill: ${primaryColor.grayishBlue};
            }
    }
    div{
      color: ${primaryColor.grayishBlue};
    }
  `,
  Caption: styled.div`
    color: ${primaryColor.moderateBlue};
    font-weight: 700;
  `,
};
