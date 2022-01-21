import styled from "styled-components";
import { device, neutralColor, primaryColor } from "./../variable.style";

export const Form = {
  Wrapper: styled.section`
    display: flex;
    background-color: ${neutralColor.white};
    border-radius: 5px;
    padding: 1rem;
    margin: 0 0 2rem 0;
  `,
  FormEl: styled.form`
    display: block;
    width: 100%;
    height: 130px;
    position: relative;
    @media ${device.desktop} {
      margin: 0 auto;
    }
  `,
  Text: styled.textarea`
    border-radius: 5px;
    outline: 1px solid ${neutralColor.lightGray};
    border: none;
    margin: 0 0 1rem 0;
    padding: 1rem;
    resize: none;
    width: 100%;
    font-family: inherit;
    color: ${neutralColor.darkBlue};
    font-size: 0.9rem;
    display: block;
    @media ${device.desktop} {
      width: 75%;
      margin: 0 2rem 1rem 3rem;
    }
  `,
  Image: styled.img`
    width: 35px;
    height: 35px;
    display: inline-block;
    margin: auto;
    position: absolute;
    left: 0;
    bottom: 0;
    @media ${device.desktop} {
      bottom: 100%;
      transform: translate(-10%, 100%);
    }
  `,
  Button: styled.button`
    background-color: ${primaryColor.moderateBlue};
    color: ${neutralColor.white};
    display: inline-block;
    width: 80px;
    margin: auto;
    padding: 0.7rem;
    border: none;
    border-radius: 5px;
    position: absolute;
    right: 0;
    bottom: 0;
    @media ${device.desktop} {
      bottom: 100%;
      transform: translate(-10%, 100%);
    }
  `,
};
