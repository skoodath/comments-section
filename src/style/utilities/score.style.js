import styled from "styled-components";
import { device, neutralColor, primaryColor } from "../variable.style";

export const Score = {
  Wrapper: styled.div`
    width: 80px;
    height: 25px;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${neutralColor.lightGray};
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    left: 1rem;
    margin: 0 0 0.6rem 0;
    cursor: pointer;
    @media ${device.desktop} {
      left: 6%;
      top: 1rem;
      transform: translateX(-50%);
      width: 32px;
      height: 70px;
      flex-direction: column;
    }
  `,
  Button: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${primaryColor.grayishBlue};
      svg{
        path{
          fill: ${neutralColor.darkBlue};
    }
        }
      }
    }
  `,
  Votes: styled.div`
    width: 100%;
    color: ${primaryColor.moderateBlue};
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.3rem 0;
  `,
};
