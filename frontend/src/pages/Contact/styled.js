import styled from "styled-components";

export const Contents = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 244px);
  background-image: url(${props => props.img});
  background-size: cover;
  background-color: rgba(113, 126, 103, 1);
  background-blend-mode: screen;

  
  @media (max-width: 767px) {
    flex-direction: column;
    height: calc(100vh - 83px);
  }
`;

export const Box = styled.div`
  flex: 1;
  font-family: "Raleway", Sans-serif;
  max-width: 33.33%;
  color: #111111;
  text-align: center;

  @media (max-width: 767px) {
    margin-top: 16px;
    max-width: 100%;
    width: 100%;
  }
`;

export const Title = styled.h1`
  padding-top: 16px;
  font-size: 1.5rem;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    padding-top: 4px;
  }
`;

export const Text = styled.p`
  letter-spacing: 0.8px;
  font-weight: 700;
  font-size: 1.275rem;

  @media (width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  height: 50px;
  width: 60px;

  @media (width: 768px) {
    height: 40px;
    width: 50px;
  }

  @media (max-width: 767px) {
    height: 30px;
    width: 40px;
  }
`;