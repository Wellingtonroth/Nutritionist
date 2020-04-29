import React from 'react';
import MediaQuery from "react-responsive";
import { FiInstagram, FiFacebook, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import * as S from "./styled";

export default function Footer() {
  return (
    <S.Footer>
      <S.Ul>
        <S.A href="https://www.instagram.com/nutrivanessamattos/" rel="noopener noreferrer" target="_blank">
          <S.Li>
            <MediaQuery query="(min-width: 1024px)">
              <FiInstagram size={22} color="#262626" /> 
            </MediaQuery>
            <MediaQuery query="(max-width: 1023px)">
              <FiInstagram size={14} color="#262626" /> 
            </MediaQuery>
          </S.Li>
        </S.A>
        <S.A href="https://www.facebook.com/nutrivanessamattos/" rel="noopener noreferrer" target="_blank">
          <S.Li>
            <MediaQuery query="(min-width: 1024px)">
              <FiFacebook size={22} color="#262626" /> 
            </MediaQuery>
            <MediaQuery query="(max-width: 1023px)">
              <FiFacebook size={14} color="#262626" /> 
            </MediaQuery>
          </S.Li>
        </S.A>
        <S.A href="https://www.linkedin.com/in/vanessa-mattos-bb13061a4/" rel="noopener noreferrer" target="_blank">
          <S.Li>
            <MediaQuery query="(min-width: 1024px)">
              <FiLinkedin size={22} color="#262626" /> 
            </MediaQuery>
            <MediaQuery query="(max-width: 1023px)">
              <FiLinkedin size={14} color="#262626" /> 
            </MediaQuery> 
          </S.Li>
        </S.A>
        <S.A href="mailto:nutrivanessamattos@gmail.com">
          <S.Li>
            <MediaQuery query="(min-width: 1024px)">
              <FiMail size={22} color="#262626" /> 
            </MediaQuery>
            <MediaQuery query="(max-width: 1023px)">
              <FiMail size={14} color="#262626" /> 
            </MediaQuery> 
          </S.Li>
        </S.A>
        <S.Li>
          <MediaQuery query="(min-width: 1024px)">
              <FiPhone size={22} color="#262626" /> 
            </MediaQuery>
            <MediaQuery query="(max-width: 1023px)">
              <FiPhone size={14} color="#262626" /> 
            </MediaQuery> 
          <S.Phone>(48) 98484-7235</S.Phone>
        </S.Li>
      </S.Ul>
    </S.Footer>
  );
}