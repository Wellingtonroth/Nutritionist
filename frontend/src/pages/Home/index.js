import React from 'react';
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import VanessaMattos from "../../assets/VanessaProfessional.jpg"
import Frutas from "../../assets/frutas.jpg"
import * as S from "./styled";

export default function Home() {

  return (
    <>
      <Menu />
      <S.Container img={Frutas} >
        <S.Main id="box">
          <S.Header>  
            <S.Image src={VanessaMattos} />
          </S.Header>
          <S.Box>
            <S.Name>Vanessa Mattos</S.Name>
            <S.Gratuations>
              Graduada em Nutrição<br />
              Pós Graduanda em Nutrição Esportiva Funcional<br />
              Pós Graduanda em Nutrição Materno Infantil
            </S.Gratuations>
            <S.Div>
              <S.Button to="contato" >
                Agende uma consulta
              </S.Button>
            </S.Div>
          </S.Box>
        </S.Main>
      </S.Container>
      <Footer />
    </>
  );
}