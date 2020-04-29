import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333", //QUANDO FOR PARA PRODUÇÃO SUBSTITUIR PELO ENDEREÇO DO SITE DA VANESASA
})

export default api;