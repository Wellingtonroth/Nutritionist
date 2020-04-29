import React from 'react';
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import FruitsHome from "../../assets/fruitsHome.jpg"
import Place from "../../assets/place.png";
import Phone from "../../assets/phone.png";
import Envelope from "../../assets/envelope.png";
import * as S from "./styled";

export default function Contact() {
  return (
    <>
      <Menu />

        <S.Contents img={FruitsHome}>
          <S.Box>
            <S.Image src={Phone} />
            <S.Title>Telefone</S.Title>
            <S.Text>
              (48) 98484-7235
            </S.Text>
          </S.Box>
          <S.Box>
            <S.Image src={Envelope} />
            <S.Title>E-mail</S.Title>
            <S.Text>nutrivanessamattos@gmail.com</S.Text>
          </S.Box>
          <S.Box>
            <S.Image src={Place} />
            <S.Title>Locais de atendimento</S.Title>
            <S.Text>Florianópolis e São José - SC</S.Text>
          </S.Box>
        </S.Contents>

      <Footer />
    </>
  );
}