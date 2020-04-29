import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.nav`
  display: flex;
  position: sticky;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 247, 247, 0.93);
  top: 0.01px;
  box-shadow: 0 2px 3px rgba(0,0,0,.1);
  z-index: 1;
  
  @media (max-width: 767px) {
    padding: 8px;
  }
`;

export const LogoLink = styled(Link)`
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 180px;
  width: 280px;
`;

export const Ul = styled.ul`
  display: flex;
  font-size: 1.2rem;
  margin: 0 auto;

  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
`;

export const Li = styled.li`
  list-style-type: none;
  padding: 16px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 6px;
  }
`;

export const Links = styled(Link)`
  color: #262626;
  transition: border-bottom 0.2s;

  &:hover {
    border-bottom: 4px solid #b6fbbd;

  }
`;