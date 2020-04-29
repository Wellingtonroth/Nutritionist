import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import api from "../../services/api";
import * as S from "./styled";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const vanessaId = localStorage.getItem("vanessaId");

  const history = useHistory();

  async function handleNewPost(e) {
    e.preventDefault();

    const data = {
      title,
      description,
    };

    try {
      await api.post("posts", data, {
        headers: {
          Authorization: vanessaId,
        }
      })
      
      history.push("/posts");
    } catch (err) {
      alert("Erro ao cadastrar post, tente novamente")
    }
  }

  const handleOnChange = (e, editor) => {
    const description = editor.getData();
    setDescription(description);
  }

  return (
    <S.Content>
      <S.Contents>
        <S.Section>
          <S.H1>Cadastro de novo Post</S.H1>
          <S.Links to="/posts">
            <FiArrowLeft size={16} color="E02041" />
            Voltar para todos os posts
          </S.Links>
        </S.Section>
        <S.Form onSubmit={handleNewPost}>
          <S.Input 
            placeholder="Título do Post" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <CKEditor 
            editor={ClassicEditor}
            onChange={handleOnChange}
          />
          <S.Button className="button" type="submit">
            Cadastrar
          </S.Button>
        </S.Form>
      </S.Contents>
    </S.Content>
  );
}