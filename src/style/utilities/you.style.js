import styled from "styled-components";
import { neutralColor, primaryColor } from "../variable.style";

export const You = {
  Wrapper: styled.div`
    width: 40px;
    background-color: ${primaryColor.moderateBlue};
    top: 0;
    margin: 0 1rem 0 0;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  `,
  Text: styled.p`
    color: ${neutralColor.white};
    font-size: 0.9rem;
  `,
};
