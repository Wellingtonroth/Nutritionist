import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Head = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 30px;
  margin: 32px auto;
  font-family: "Raleway", Sans-serif;

  @media (max-width: 767px) {
    padding: 0 8px;
    margin: 16px auto;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const Welcome = styled.span`
  font-size: 2rem;
  color: #555;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #bbb;
  height: 32px;
  transition: border-color 0.2s;

  :hover {
    border-color: #ef3e93;
  }
`;

export const Links = styled(Link)`
  background-color: rgb(239, 62, 147);
  padding: 12px;
  border-radius: 16px; 
  border: 1px solid  #ef3e93;
  margin-right: 8px;
  transition: border-color 0.2s;
  transition: background-color 0.2s;
  color: #fff;
  font-weight: 500;

  :hover {
    border-color: #d10a6a;
    background-color: #f4107e;
  }

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  color: #555;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;       
  margin-top: 16px;
  margin-bottom: 32px;
  color: #555;

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 20px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column-reverse;
`;

export const Li = styled.li`
  list-style-type: none;
  background-color: #f3ffed;
  padding: 24px;
  color: #363636;
  box-shadow: 0 2px 3px rgba(0,0,0,.1);
  margin-bottom: 24px;

  &:first-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    padding: 16px;
    margin-bottom: 16px;
  }
`;

export const Strong = styled.h2`
  margin-bottom: 24px;
  font-size: 1.8rem;
  font-weight: 400;

  @media (max-width: 767px) {
    margin-bottom: 12px;
    font-size: 1.6rem;
  }
`;

export const Text = styled.div`
  color: #363636;
  font-size: 1.2rem;
  text-indent: 3rem;
  line-height: 1.5;
  letter-spacing: 0.7px;

  @media (max-width: 767px) {
    margin-bottom: 12px;
    font-size: 1rem;
    text-indent: 2rem;
    line-height: 22px;
  }
`;