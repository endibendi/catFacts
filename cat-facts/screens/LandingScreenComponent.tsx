import styled from "styled-components";
import Head from "next/head";
import { Container, Main, Title } from "../styles/sharedstyles";
import PrimaryButton from "../components/PrimaryButton";
import FactCardComponent from "../components/FactCardComponent";
import { TCatFact, TLink } from "../types/commonTypes";
import PageLink from "../components/PageLink";

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
  margin-top: 54px;
  margin-bottom: 54px;
`;

const PageLinkContainer = styled.section`
  margin-top: 81px;
`;

type TProps = {
  catFacts: TCatFact[];
  links: TLink[];
  onPageLinkClick: (string) => void;
};

const LandingScreenComponent = ({
  catFacts,
  links,
  onPageLinkClick,
}: TProps) => {
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
          </HeroSection>
          {catFacts && (
            <ContentSection>
              {catFacts.map((catFact, index) => {
                return <FactCardComponent key={index} catFact={catFact.fact} />;
              })}
              <PageLinkContainer>
                {links.map((link, index) => {
                  const { label, active, url } = link;

                  return (
                    <PageLink
                      key={index}
                      label={label}
                      active={active}
                      url={url}
                      onClick={onPageLinkClick}
                    />
                  );
                })}
              </PageLinkContainer>
            </ContentSection>
          )}
        </Container>
      </Main>
    </>
  );
};

export default LandingScreenComponent;
