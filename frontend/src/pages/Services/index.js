import React from 'react';
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Attendance from "../../assets/atendimento.png";
import Heart from "../../assets/coracao.png";
import WeightTraining from "../../assets/musculacao.png";
import Pregnant from "../../assets/gravida.png";
import Woman from "../../assets/woman.png";
import Diet from "../../assets/diet.png";
import * as S from "./styled";

export default function Services() {
  return (
    <>
      <Menu />
      <S.Container>
        <S.Head>
          <S.Title>
            SERVIÇOS
          </S.Title>
          <S.SubTitle>
          Conheça um pouco mais sobre os serviços que presto. Ficarei muito feliz em ajudar você a conquistar seus objetivos!
          </S.SubTitle>
        </S.Head>

        <S.Section>
          <S.Box>
            <S.Span>
              <S.Image src={Attendance} />
            </S.Span>
            <S.Name>Atendimento Nutricional</S.Name>
            <S.Border />
            <S.Description>
              Na primeira consulta realizamos uma conversa para que eu possa entender sua rotina e necessidades, 
              através de investigação de sinais e sintomas, preferências e aversões alimentares, principais 
              dificuldades, histórico de doenças na família, avaliação de exames de sangue, gasto energético, 
              avaliação física (percentual de gordura e massa magra), avaliação da necessidade do consumo de 
              suplementos alimentares e receitas. A partir disso faço um plano alimentar individual, específico 
              para você.
            </S.Description>
          </S.Box>
          <S.Box>
            <S.Span>
              <S.Image src={Heart} />
            </S.Span>
            <S.Name>Acompanhamento Nutricional</S.Name>
            <S.Border />
            <S.Description>
              Nas consultas de acompanhamento iremos acompanhar seus resultados, realizar uma nova avaliação física 
              para acompanhar as alterações na composição corporal, verificar as dificuldades que surgirem e como 
              podemos resolve-las, realizar adaptações no cardápio e traçar novas estratégias para alcançar o seu 
              objetivo.
            </S.Description>
          </S.Box>
          <S.Box>
            <S.Span>
              <S.Image src={WeightTraining} />
            </S.Span>
            <S.Name>Nutrição Esportiva Funcional</S.Name>
            <S.Border />
            <S.Description>
              Além das práticas realizadas no atendimento nutricional, é realizada orientações específicas para 
              sua modalidade esportiva e seu objetivo, como melhora do desempenho em treinos e/ou competições, 
              aumento de massa muscular ou perda de gordura.
            </S.Description>
          </S.Box>
          <S.Box>
            <S.Span>
              <S.Image src={Pregnant} />
            </S.Span>
            <S.Name>Nutrição Materno Infantil</S.Name>
            <S.Border />
            <S.Description>
              No caso de gestantes, além das práticas realizadas no atendimento nutricional, faremos orientações 
              específicas para os sinais e sintomas comuns nesse período (como náuseas, constipação, azia), 
              acompanhamento do ganho de peso durante a gestação (promovendo um ganho saudável necessário nesse 
              momento), orientações necessárias para o bom desenvolvimento do bebê, e quanto ao aleitamento materno 
              e alimentação nesse período. Na nutrição infantil iremos promover a alimentação saudável do seu filho, 
              contribuindo para que ele adquira hábitos alimentares saudáveis de forma leve e duradoura.
            </S.Description>
          </S.Box>
        </S.Section>

        <S.Section>
          <S.Box width maxwidth>
            <S.Span>
              <S.Image src={Woman} />
            </S.Span>
            <S.Name>Palestras</S.Name>
            <S.Border />
            <S.Description>
              Realizo palestras de Educação Nutricional em academias e empresas, promovendo bons hábitos 
              alimentares, podendo ser com temas específicos da escolha do cliente – como Alimentação Saudável, 
              Alimentação aliada à prática de atividades físicas, Alimentação durante a Gestação, entre outros.
            </S.Description>
          </S.Box>
          <S.Box width maxwidth>
            <S.Span>
              <S.Image src={Diet} />
            </S.Span>
            <S.Name>Rotulagem nutricional</S.Name>
            <S.Border />
            <S.Description>
              Alimentos e bebidas embalados devem ter rotulagem nutricional de forma obrigatória. Faço a rotulagem 
              nutricional (tabela nutricional e lista de ingredientes de acordo com as regulamentações da ANVISA) 
              de acordo com a receita do seu produto.
            </S.Description>
          </S.Box>
        </S.Section>
        <S.Div>
          <S.Button to="contato" >
            Agende uma consulta
          </S.Button>
        </S.Div>
      </S.Container>
      <Footer />
    </>
  );
}