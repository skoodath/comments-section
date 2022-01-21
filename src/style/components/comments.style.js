import styled from "styled-components";
import { device, neutralColor } from "./../variable.style";

export const Comments = {
  Wrapper: styled.section`
    background-color: ${neutralColor.white};
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 5px;
    position: relative;
  `,
  User: styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  UserImage: styled.img`
    width: 35px;
    height: 35px;
    display: inline-block;
    margin: 0 1rem 0 0;
  `,
  UserName: styled.p`
    color: ${neutralColor.darkBlue};
    font-weight: 500;
    margin: 0 1rem 0 0;
  `,
  CreatedAt: styled.p`
    color: ${neutralColor.grayishBlue};
    margin: 0 1rem 0 0;
  `,
  Content: styled.p`
    margin: 1rem 0 3rem 0;
    color: ${neutralColor.grayishBlue};
    line-height: 1.3;
    font-weight: 400;
  `,
  ReplyWrapper: styled.section`
    border-left: 1px solid ${neutralColor.grayishBlue};
    padding: 0 0 0 1rem;
    @media ${device.desktop} {
      width: 95%;
      margin: 0 0 0 auto;
      padding: 0 0 0 2rem;
    }
  `,
};
