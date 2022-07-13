import React from 'react';
import styled from 'styled-components';

//IMPORTING ASSETS
import myLogo from "../Assets/Logo.svg"

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
`;

const ImageBox = styled.div`
    width: 50vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AboutBox = styled.div`
    width: 50vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`;

const Logo = styled.img`
  width: 25vw;
  height: 30vh;
  object-fit: contain;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  color: #00145D;
  width: 50vw;
  height: 15vh;
`;

const TxtBox = styled.div`
    width: 40vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Paragraph = styled.p`
    font-size: 1.125rem;
    color: #272727;
`;

const ParagraphT2 = styled(Paragraph)`
    font-size: 0.75rem;
    color: #000000;
`;

export default function About() {
  return (
    <Container>
      <ImageBox>
        <Logo src={myLogo} />
      </ImageBox>
      <AboutBox>
        <Subtitle>Sobre o Vai na Web</Subtitle>
        <TxtBox>
          <ParagraphT2>Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e transformando a vida de jovens das classes C, D e E do Rio de Janeiro e de outros 18 estados do Brasil.</ParagraphT2>
          <ParagraphT2>Muito mais do que compartilhar conhecimento de programação front-end, o programa oferece aulas de inglês e desenvolvimento de habilidades humanas e socioemocionais, que preparam os futuros desenvolvedores para o mundo do trabalho e oferecem um espaço em que é possível descobrir a riqueza de áreas que a tecnologia tem.</ParagraphT2>
          <ParagraphT2>Com o objetivo de acentuar a potência mundial que é a juventude, o Vai na Web tem se tornado cada vez mais um lugar de transformação. Através da cultura do afeto, a equipe do programa entende que “educar não é impor informação, é trocar” e sua maior riqueza, segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da juventude que está nesse processo de compartilhar”.</ParagraphT2>
        </TxtBox>
      </AboutBox>
    </Container>
  )
}
