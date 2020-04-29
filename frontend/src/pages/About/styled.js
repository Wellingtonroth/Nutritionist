import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  color: #555;
  padding: 0 16px 16px 16px;
  font-family: "Raleway", Sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  ${props => props.size && `font-size: 2rem;`}
  font-weight: 400;
  text-align: center;
  margin: 32px auto;
  ${props => props.margin && `margin: 16px auto;`}

  @media (max-width: 767px) {
    font-size: 2rem;
    margin: 16px auto;
    ${props => props.size && `font-size: 1.8rem;`}
  }
`;

export const Section = styled.section`
  display: flex;
  max-width: 1024px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  padding: 16px 24px;
  box-shadow: 0 2px 4px 1px rgba(0,0,0,.1);
  max-width: 600px;
  width: 100%;
  background-color: #f3ffed;

  @media (width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 8px;
  }
`;

export const Image = styled.img`
  height: 500px;
  width: 340px;
  box-shadow: 0 2px 4px 1px rgba(0,0,0,.1);
  margin-right: 16px;

  @media (max-width: 767px) {
    height: 410px;
    width: 288px;
    margin-right: 0px;
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  text-indent: 1rem;
  line-height: 1.8;
  letter-spacing: 0.7px;

  @media (max-width: 767px) {
    font-size: 1rem;
    text-indent: 1rem;
    line-height: 1.6;
  }
`;