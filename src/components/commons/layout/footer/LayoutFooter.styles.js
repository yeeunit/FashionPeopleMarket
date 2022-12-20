import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakPoints } from "../../../../commons/styles/media";

export const Star = styled(FontAwesomeIcon)`
  color: yellow;
  font-size: 3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem 0;
  /* border-top: 1px solid gray; */
  height: 4rem;

  /* background-color: white; */

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 22rem;
  background-color: #eee;
  @media ${breakPoints.mobile} {
    /* display: none; */
    flex-direction: row;
    padding: 3rem;
    height: 11rem;
  }
`;

export const FooterText = styled.span`
  display: inline-block;
  color: #555;
  font-size: 1rem;
  font-weight: 400;
  margin: 1.3rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 0.6rem;
    display: none;
  }
`;

export const FooterText2 = styled.span`
  display: inline-block;
  text-align: center;
  color: #555;
  margin-top: 1rem;
  font-size: 0.7rem;
  font-weight: 100;
  @media ${breakPoints.mobile} {
    font-size: 0.6rem;
  }
`;
