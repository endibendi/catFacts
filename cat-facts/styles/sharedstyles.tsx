import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  min-width: 330px;
  max-width: 680px;
  padding: 0 30px;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 400;
  line-height: 1.15;
  font-size: 3.375rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { Container, Main, Title, Description, CodeTag };
