import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import * as S from "./styled";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("vanessaId", id);
      localStorage.setItem("vanessaName", response.data.name);
      history.push("/posts");
    } catch (err) {
      alert("Falha no login, tente novamente");
    }
  }

  return (
    <S.Container>
      <S.Section>
        <S.Form onSubmit={handleLogin}>
          <S.H1>Faça seu Login</S.H1>
          <S.Box>
            <S.Input
              placeholder="Sua ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <S.Button type="submit">Entrar</S.Button>
            <S.Links to="/register">
              Não tenho cadastro
            </S.Links>
          </S.Box>
          <S.Links to="/">
            Ir para o site
          </S.Links>
        </S.Form>
      </S.Section>
    </S.Container>
  );
}