import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  margin-right: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  margin: 0 8px 8px 0;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #bbb;
`;

export const Links = styled(Link)``;