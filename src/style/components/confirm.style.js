import styled from "styled-components";
import { neutralColor, primaryColor } from "../variable.style";

export const Confirm = {
  Wrapper: styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
  `,
  Background: styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.35);
    position: absolute;
    z-index: 2;
  `,
  Inner: styled.section`
    width: 90%;
    max-width: 338px;
    height: 200px;
    background-color: ${neutralColor.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    padding: 2rem;
    margin: auto;
    border-radius: 10px;
  `,
  Title: styled.h2`
    color: ${neutralColor.darkBlue};
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
  `,
  Message: styled.p`
    color: ${neutralColor.grayishBlue};
    font-size: 1.2rem;
    line-height: 1.3;
    margin: 0 0 1rem 0;
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-around;
  `,
  Cancel: styled.button`
    background-color: ${neutralColor.grayishBlue};
    color: ${neutralColor.white};
    text-transform: uppercase;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    letter-spacing: 1px;
    width: 47%;
    cursor: pointer;
  `,
  Delete: styled.button`
    background-color: ${primaryColor.softRed};
    color: ${neutralColor.white};
    text-transform: uppercase;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    letter-spacing: 1px;
    width: 47%;
    cursor: pointer;
  `,
};
