import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import * as S from "./styled";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name, 
      email, 
      whatsapp, 
      city, 
      uf,
    };

    try {
      const response = await api.post('vanessa', data);

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <S.Container>
      <S.Section>
          <S.H1>Faça seu cadastro</S.H1>
          <S.Links to="/login">
            Voltar para o Login
          </S.Links>
      </S.Section>
      <S.Form onSubmit={handleRegister}>
        <S.Input 
            placeholder="Nome Completo" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <S.Input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <S.Input 
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)} 
          />
          <div>
            <S.Input 
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <S.Input 
              placeholder="UF" style={{ width: 80 }} 
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <S.Button className="button" type="submit">
            Cadastrar
          </S.Button>
        </S.Form>
    </S.Container>
  );
}