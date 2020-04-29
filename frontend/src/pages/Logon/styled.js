import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 278px;
  margin: 0 auto;
  align-items: center;
`;

export const Section = styled.section``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const H1 = styled.h1``;

export const Input = styled.input`
  margin: 16px 16px 16px 0;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
`;

export const Box = styled.div``;

export const Button = styled.button`
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #bbb;
  margin-bottom: 16px;
`;

export const Links = styled(Link)`
  margin-left: 8px;
`;