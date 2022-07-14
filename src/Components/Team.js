import React, { Component } from 'react';
import styled from 'styled-components';

//IMPORTING ASSETS
import mySearchIcon from "../Assets/SearchIcon.svg"
import AlineFroes from "../Assets/Fotos Equipe Técnica/AlineFroes_CEO.jpg"
import AlineNogueira from "../Assets/Fotos Equipe Técnica/AlineNogueira_agenteSocioemocional.jpg"
import AndreaMarinho from "../Assets/Fotos Equipe Técnica/AndreaMarinho_Psicologa.jpg"
import CrisDosPrazeres from "../Assets/Fotos Equipe Técnica/CrisDosPrazeres_coordenadoraExecutiva.jpg"
import DimitriDuque from "../Assets/Fotos Equipe Técnica/DimitriDuque_voluntario.jpg"
import HugoSabino from "../Assets/Fotos Equipe Técnica/HugoSabino_voluntário.jpg"
import KarlaDeMelo from "../Assets/Fotos Equipe Técnica/KarlaDeMelo_voluntaria.jpg"
import KarynneMoreira from "../Assets/Fotos Equipe Técnica/KarynneMoreira_facilitadoraTecnica.jpg"
import LuziaMerlim from "../Assets/Fotos Equipe Técnica/LuziaMerlim_agenteSocioemocional.jpg"
import MarianaCorreia from "../Assets/Fotos Equipe Técnica/MarianaCorreia_coordenadoraAdministrativa.jpg"
import MarinaTiago from "../Assets/Fotos Equipe Técnica/MarinaTiago_agenteDeEstratégia.jpg"
import MarlonYuri from "../Assets/Fotos Equipe Técnica/MarlonYuri_instrutorTecnico.jpg"
import PaulaMisan from "../Assets/Fotos Equipe Técnica/PaulaMisan_Voluntária.jpg"
import PriscilaTufani from "../Assets/Fotos Equipe Técnica/PriscilaTufani_agenteDeEstratégia.jpg"
import ThaisBrait from "../Assets/Fotos Equipe Técnica/ThaisBrait_voluntaria.jpg"


const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 72px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  text-align: left;
  color: #00145D;
  width: 80vw;
  height: 15vh;
`;

const SearchContainer = styled.div`
    width: 80vw;
    height: 10vh;
    display: flex;
    align-items: center;
    padding-left: 72px;
    background-color: #0F2260;
`;

const Search = styled.label`
    width: 20vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
`;

const Input = styled.input`
    color: #BCE0FD;
    width: 15vw;
    height: 5vh;
    border: none;
    background-color: transparent;

    ::placeholder{
        color: #BCE0FD;
    }
`;

const SearchBtn = styled.button`
    width: 4vw;
    height: 5vh;
    border: none;
    display: flex;
    align-items: center:
    justify-content: center;
    background-color: transparent;

    :hover{
        cursor:pointer;
    }
`;

const SearchIcon = styled.img`
    width:5vw;
    height: 5vh;
    object-fit: contain;
`;

const TeamContainer = styled.div`
    width: 80vw;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const TeamMember = styled.div`
    width: 18vw;
    height: 34vh;
`;

export default class Team extends Component {

    state = {
        members: [
            {
                name: "Aline Froes",
                job: "CEO",
                photo: { AlineFroes }
            },
            {
                name: "Aline Nogueira",
                job: "Agente Socioemocional",
                photo: { AlineNogueira }
            },
            {
                name: "Andrea Marinho",
                job: "Psicóloga",
                photo: { AndreaMarinho }
            },
            {
                name: "Cris dos Prazeres",
                job: "Coordenadora Executiva",
                photo: { CrisDosPrazeres }
            },
            {
                name: "Dimitri Duque",
                job: "Voluntário",
                photo: { DimitriDuque }
            },
            {
                name: "Hugo Sabino",
                job: "Voluntário",
                photo: { HugoSabino }
            },
            {
                name: "Karla de Melo",
                job: "Voluntária",
                photo: { KarlaDeMelo }
            },
            {
                name: "Karynne Moreira",
                job: "Facilitadora Técnica",
                photo: { KarynneMoreira }
            },
            {
                name: "Luzia Merlim",
                job: "Agente Socioemocional",
                photo: { LuziaMerlim }
            },
            {
                name: "Mariana Correia",
                job: "Coordenadora Administrativa",
                photo: { MarianaCorreia }
            },
            {
                name: "Marina Tiago",
                job: "Agente de Estratégia",
                photo: { MarinaTiago }
            },
            {
                name: "Marlon Yuri",
                job: "Instrutor Técnico",
                photo: { MarlonYuri }
            },
            {
                name: "Paula Misan",
                job: "Voluntária",
                photo: { PaulaMisan }
            },
            {
                name: "Priscila Tufani",
                job: "Agente de Estratégia",
                photo: { PriscilaTufani }
            },
            {
                name: "Thais Brait",
                job: "Voluntária",
                photo: { ThaisBrait }
            },
        ]
    }

    render() {

        return (
            <Container>
                <Subtitle>Equipe</Subtitle>
                <SearchContainer>
                    <Search><Input placeholder='Pesquisar...' /> <SearchBtn><SearchIcon src={mySearchIcon} /></SearchBtn></Search>
                </SearchContainer>
                <TeamContainer>
                    {this.state.members.map((item, index) => (
                        <TeamMember key={index}>
                            <img src={item.photo} alt="Foto do membro da equipe" />
                            <h4>{item.name}</h4>
                            <p>{item.job}</p>
                        </TeamMember>
                    ))}
                </TeamContainer>
            </Container>
        )
    }
}