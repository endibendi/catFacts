import styled from "styled-components";
import Head from "next/head";
import { Container, Main, Title } from "../styles/sharedstyles";
import PrimaryButton from "../components/PrimaryButton";
import FactCardComponent from "../components/FactCardComponent";

const HeroSection = styled.section`
  margin-top: 80px;
`;

const HeroImage = styled.div`
  margin: 36px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 150px;
`;

const ButtonContainer = styled.div`
  margin-top: 54px;
  margin-bottom: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentSection = styled.section`
  margin-bottom: 54px;
`;

const LandingScreenComponent = () => {
  return (
    <>
      <Head>
        <title>Cat facts</title>
        <meta
          name="description"
          content="Cat facts project, made for showcasing nextjs skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Container>
          <HeroSection>
            <Title>Cat facts</Title>
            <HeroImage>
              <img src="/cat-illustration.svg" />
            </HeroImage>
            <ButtonContainer>
              <PrimaryButton title="Get the facts!" onClick={() => {}} />
            </ButtonContainer>
          </HeroSection>

          <ContentSection>
            <FactCardComponent />
            <FactCardComponent />
            <FactCardComponent />
            <FactCardComponent />
            <FactCardComponent />
            <FactCardComponent />
            <FactCardComponent />
            <FactCardComponent />
            <FactCardComponent />
            <FactCardComponent />
          </ContentSection>
        </Container>
      </Main>
    </>
  );
};

export default LandingScreenComponent;
