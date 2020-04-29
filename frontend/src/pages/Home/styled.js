import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-color: rgba(185, 193, 179, 1);
  background-blend-mode: screen;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
`;

export const Header = styled.div`
  padding: 16px;

  @media (max-width: 767px) {
    padding: 8px;
  }
`;

export const Image = styled.img`
  height: 500px;
  width: 346px;
  box-shadow: 0 2px 4px 1px rgba(0,0,0,.1);

  @media (max-width: 767px) {
    height: 380px;
    width: 260px;
  }
`;

export const Name = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const Div = styled.div`
  margin-top: 40px;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-top: 16px;
  }
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

export const Fruits = styled.img`
  width: 100%;
`;

export const Box = styled.div`
  color: #000;
  margin: 16px;
`;

export const Gratuations = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 22px;

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 20px;
  }
`;

export const Arrow = styled.a`
  display: flex;
  justify-content: center;
  margin: 16px;
  cursor: pointer;
`;