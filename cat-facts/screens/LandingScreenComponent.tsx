import Head from "next/head";
import Cards from "../components/cards";
import {
  CodeTag,
  Container,
  Description,
  Main,
  Title,
} from "../components/sharedstyles";

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
          <Title>Cat facts</Title>
        </Container>
      </Main>
    </>
  );
};

export default LandingScreenComponent;
