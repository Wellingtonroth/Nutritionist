import React from 'react';
import MediaQuery from "react-responsive";
import VanessaMattosLogo from "../../assets/Logo-Vanessa-Mattos.png"
import * as S from "./styled";

export default function Menu() {

  return (
    <S.Menu>
      <MediaQuery query="(min-width: 1024px)">
        <S.LogoLink to="/">
          <S.Logo src={VanessaMattosLogo} />
        </S.LogoLink>
      </MediaQuery>
      <S.Ul>
        <S.Li>
          <S.Links to="/">
            HOME
          </S.Links>
        </S.Li>
        <S.Li>
          <S.Links to="/sobre">
            SOBRE
          </S.Links>
        </S.Li>
        <S.Li>
          <S.Links to="/posts">
            BLOG
          </S.Links>
        </S.Li>
        <S.Li>
          <S.Links to="/servicos">
            SERVIÇOS
          </S.Links>
        </S.Li>
        <S.Li>
          <S.Links to="/contato">
            CONTATO
          </S.Links>
        </S.Li>
      </S.Ul>
    </S.Menu>
  );
}