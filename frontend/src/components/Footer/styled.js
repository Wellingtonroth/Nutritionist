import styled from "styled-components";

export const Footer = styled.footer`
  background-color: rgba(255, 247, 247, 0.93);
  box-shadow: 0px -4px 8px 0px rgba(0,0,0,0.15);
`;

export const Ul = styled.ul`
  display: flex;
  margin: 0 auto;
  height: 60px;

  @media (max-width: 767px) {
    height: 40px;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 16px;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 767px) {
    padding: 8px;
  }
`;

export const A = styled.a`
  display: flex;
  align-items: center;
`;

export const Phone = styled.span`
  margin-left: 8px;
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
`;