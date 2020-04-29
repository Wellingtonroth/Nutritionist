import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 48px;
`;

export const Head = styled.div`
  margin: 32px 0;
  color: #555;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 16px;
  text-align: center;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 20px;
    margin-top: 8px;
    margin-bottom: 0px;
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`;

export const Image = styled.img`
  height: 70px;
  width: 80px;
`;

export const Section = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;

  }
`;

export const Box = styled.div`
  background-color: #f3ffed;
  max-width: 30%;
  width: 30%;
  ${props => props.width && `width: 47%;`}
  ${props => props.maxwidth && `max-width: 47%;`}
  margin: 0 32px 32px 32px;
  padding: 24px;
  box-shadow: 0 2px 3px rgba(0,0,0,.1);
  color: #455b64;
  font-family: "Raleway", Sans-serif;

  &:nth-child(odd) {
    background-color: #d1ffd1;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    width: 100%;
  }
`;

export const Name = styled.h2`
  padding-bottom: 16px;
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const Border = styled.div`
  width: 48px;
  border-bottom: 3px solid #455b64;
`;

export const Description = styled.p`
  line-height: 1.8;
  letter-spacing: 0.7px;
  font-size: 1rem;
  padding-top: 16px;
`;

export const Div = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

export const Button = styled(Link)`
  text-align: center;
  padding: 8px 32px;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 1px 1px 7px 0px rgba(0,0,0,.1);
  cursor: pointer;
  color: #282828;
  transition: background-color 0.5s;
  background-color: #60eb73;

  &:hover {
    background-color: #f48bac;
  }

`;