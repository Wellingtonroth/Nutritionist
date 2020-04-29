import React from 'react';
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import VanessaMattos from "../../assets/VanessaProfessional2.jpg";
import * as S from "./styled";

export default function About() {
  return (
    <>
      <Menu />
      <S.Container>
        <S.Title>SOBRE MIM</S.Title>
        <S.Section>
          <S.Image src={VanessaMattos} />
          <S.Content>
            <S.Title size margin>Meu nome é Vanessa Mattos.</S.Title>
            <S.Text>
              Um pouco da minha história...
            </S.Text>
            <S.Text>
              Eu pratiquei natação dos 10 aos 15 anos, cheguei a participar de competições – tanto na piscina quanto 
              no mar - e foi por isso que tive minha primeira experiência com a Nutrição. Consultei com um nutricionista 
              esportivo por um tempo, e depois na escolha da minha profissão eu me inspirei nele.
            </S.Text>
            <S.Text>
              Eu queria fazer algo em que eu pudesse ajudar pessoas, e ao mesmo tempo algo que gostasse de fazer, e 
              a Nutrição foi a única profissão que eu conseguia me ver fazendo com prazer.
            </S.Text>
            <S.Text>
              Entrei na faculdade já decidida a seguir o caminho da Nutrição Esportiva, pela experiência que tive no 
              passado, e por ser um assunto que me encantava. Fiz estágio durante 3 anos nessa área, e só confirmou 
              minha paixão.
            </S.Text>
            <S.Text>
              Lá pela metade da graduação tive aula sobre Nutrição Materno Infantil, e foi outro despertar, vi ali 
              a oportunidade de promover a saúde de um serzinho desde a barriga da mãe, e achei mágico! Por isso, 
              hoje, essas são as duas principais áreas pelas quais sou apaixonada e me dedico a estudar - faço 
              pós-graduação em Nutrição Esportiva Funcional e em Nutrição Materno Infantil.
            </S.Text>
            <S.Text>
              Amo a minha profissão, amo ajudar as pessoas a conquistarem seus objetivos, melhorarem sua saúde!
            </S.Text>
          </S.Content>
        </S.Section>
      </S.Container>
      <Footer />
    </>
  );
}