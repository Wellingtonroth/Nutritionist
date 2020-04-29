import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f0f0f5;
  box-shadow: 2px 3px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  margin: 16px 8px 16px 0;
  color: #1f1f1f;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 650px;
`;

export const Input = styled.input`
  margin: 0 8px 8px 0;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #ef3e93;
  padding: 12px;
  border-radius: 16px; 
  border: 1px solid  #ef3e93;
  margin-right: 8px;
  transition: border-color 0.2s;
  transition: background-color 0.2s;
  color: #fff;
  font-weight: bold;

  :hover {
    border-color: #d10a6a;
    background-color: #f4107e;
  }
`;

export const Links = styled(Link)`
  display: flex;
  color: rgb(239, 62, 147);
`;