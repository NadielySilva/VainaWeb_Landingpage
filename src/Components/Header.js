import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Nav from './Nav';

//IMPORTING ASSETS
import myLogo from "../Assets/Logo.svg"
import myHeaderImg from "../Assets/Banner.png"

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: no-repeat center center;
  background-image: url(${myHeaderImg});
  background-color: transparent;
  background-size: cover;
`;

const Menu = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 8vw;
  height: 8vh;
  object-fit: contain;
`;

const Banner = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 15vw;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #FFAC2D;
  width: 80vw;
  height: 20vh;
`;

const TabContainer = styled.div`
  width: 40vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 20px;
  box-shadow: 0px 5px 12px #00145D29;
  background-color: #FFFFFF;
`;

const TabMarker = styled.div`
  width: 24px;
  height: 6px;
  border-bottom: 6px solid #00145D;
  border-bottom-style: dotted;
`;

const TabDivider = styled.div`
  width: 36vw;
  height: 12px;
  border-bottom: 3px solid #00145D;
  margin-bottom: 12px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #00145D;
  width: 36vw;
  height: 15vh;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #272727;
`;

const ParagraphT1 = styled(Paragraph)`
  font-size: 0.85rem;
  color: #FED5B2;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: #FED5B2;
`;

export default function Header() {
  return (
    <div>
      <Container>
          <Menu>
            <Logo src={myLogo} alt="Logo vai na Web - cor amarelo e laraja com fundo azul." />
            <Nav />
          </Menu>
          <Banner>
            <Title> _// Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</Title>
            <div>
              <TabContainer>
                <TabMarker></TabMarker>
                <TabDivider></TabDivider>
                <Subtitle>Inscreva-se no Vai na Web!</Subtitle>
                <Paragraph>Inscrições 02 a 21 de Agosto</Paragraph>
              </TabContainer>
              <ParagraphT1>Link para o formulário: <LinkStyle href='bit.ly/CarreiraVaiNaWeb'>bit.ly/CarreiraVaiNaWeb</LinkStyle></ParagraphT1>
            </div>
          </Banner>
        </Container>
    </div>
  )
}
