import styled from "styled-components";
import { device, neutralColor, primaryColor } from "../variable.style";

export const Reply = {
  Wrapper: styled.div`
    width: 65px;
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
    @media ${device.desktop} {
      bottom: 70%;
    }
  `,
  Caption: styled.div`
    color: ${({ isReply }) =>
      !isReply
        ? `${primaryColor.moderateBlue}`
        : `${primaryColor.grayishBlue}`};
    font-weight: 700;
  `,
};
