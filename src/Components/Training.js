import React from 'react';
import styled from 'styled-components';

//IMPORTING ASSETS
import myTrainingImg from "../Assets/Training_Image@2x.png"
import myIcon from "../Assets/ScreenIcon.svg"

const Container = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
`;

const TrainingBox = styled.div`
    width: 50vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Subtitle = styled.h2`
    font-size: 1.8rem;
    text-align: center;
    color: #0F2260;
`;

const TrainingBranch = styled.div`
    width: 30vw;
    height: 22vh;
    display: flex;
    justify-content: space-between;
`;

const TextBox = styled.div`
    width: 20vw;
    height: 20vh;
`;

const SubtitleT1 = styled(Subtitle)`
    font-size: 1rem;
    text-align: left;
    text-transform: uppercase;
    color: #0F2260;
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    font-size: 1.125rem;
    color: #272727;
`;

const ParagraphT3 = styled(Paragraph)`
    font-size: 0.60rem;
    color: #000000;
`;

const ImgBox = styled.div`
    width: 50vw;
    height: 60vh;
`;

const TrainingImg = styled.img`
    width: 50vw;
    height: 60vh;
    object-fit: cover;
`;

const IconBox = styled.div`
    width: 6.75vw;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #FFAC2D;
    border-radius: 50%;
    background-color: #FDE7A9;
`;

const Icon = styled.img`
    width: 4vw;
    height: 6vh;
    object-fit: contain;
`;

export default function Training() {
  return (
    <Container>
        <TrainingBox>
            <Subtitle>Formação</Subtitle>
            <TrainingBranch>
                <IconBox>
                    <Icon src={myIcon}/>
                </IconBox>                
                <TextBox>
                    <SubtitleT1>FRONT-END</SubtitleT1>
                    <ParagraphT3>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</ParagraphT3>
                </TextBox>
            </TrainingBranch>
            <TrainingBranch>
                <IconBox>
                    <Icon src={myIcon}/>
                </IconBox>
                <TextBox>
                    <SubtitleT1>BACK-END</SubtitleT1>
                    <ParagraphT3>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</ParagraphT3>
                </TextBox>
            </TrainingBranch>
        </TrainingBox>
        <ImgBox>
            <TrainingImg src={myTrainingImg}/>
        </ImgBox>
    </Container>
  )
}
