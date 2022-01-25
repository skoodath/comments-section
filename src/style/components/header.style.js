import styled from "styled-components";
import { device, neutralColor, primaryColor } from "../variable.style";

export const Header = {
  Wrapper: styled.header`
    position: fixed;
    width: 100%;
    background-color: ${primaryColor.moderateBlue};
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  `,
  Brand: styled.h1`
    font-size: 1.5rem;
    color: ${neutralColor.white};
    @media ${device.laptop} {
      font-size: 2rem;
    }
  `,
};