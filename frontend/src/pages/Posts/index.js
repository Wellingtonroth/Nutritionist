import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import api from "../../services/api";
import * as S from "./styled";
import ReactHtmlParser from "react-html-parser";


export default function Register() {
  const vanessaId = localStorage.getItem("vanessaId");
  const vanessaName = localStorage.getItem("vanessaName");

  const history = useHistory();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("posts", {
      headers: {
        Authorization: vanessaId,
      }
    }).then(response => {
      setPosts(response.data);
    });
  }, [vanessaId]);

  async function handleDeletePost(id) {
    try {
      await api.delete(`posts/${id}`, {
        headers: {
          Authorization: vanessaId
        }
      });
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      alert(`Erro ao deletar o post, tente novamente.`);
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/login");
  }

  const verify = localStorage.vanessaName === "Vanessa Mattos";

  return (
    <>
      <Menu />
      <S.Head>

      {verify ? (
        <S.Header>
        <S.Welcome>Bem vinda {vanessaName}</S.Welcome>
          <S.Links to="/new/post">
            Cadastrar Novo Post
          </S.Links>
          <S.Button type="button" onClick={handleLogout}>
            <FiPower size={18} color="ef3e93" />
          </S.Button>
        </S.Header>
      ) : null}

        <S.Title>POSTS</S.Title>
        <S.SubTitle>
          Me dedico a estudar para que possa compartilhar conhecimentos e promover a educação nutricional! Abaixo 
          alguns posts informativos sobre temas que podem lhe ajudar! Para orientações individuais, procure um 
          nutricionista!
        </S.SubTitle>
        <S.Ul>
        {posts.map(post => (
          <S.Li key={post.id}>
            <S.Strong>{post.title}</S.Strong>
            <S.Text>{ReactHtmlParser(post.description)}</S.Text>

            {verify ? (
              <S.Button 
                type="button"
                onClick={() => handleDeletePost(post.id)}
              >
                <FiTrash2 size="20" color="ef3e93" />
              </S.Button>
            ) : null}
            
          </S.Li>
        ))} 
        </S.Ul>
      </S.Head>
      <Footer />
    </>
  );
}