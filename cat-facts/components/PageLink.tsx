import styled from "styled-components";

const Button = styled.button<{ active }>`
  background-color: transparent;
  font-family: inherit;
  font-size: 24px;
  border: none;
  color: ${({ active }) => (active ? "#df2929" : "inherit")};

  &:hover {
    color: #df2929;
    border-color: #df2929;
  }
`;

type TProps = {
  url?: string;
  label: string;
  active: boolean;
  onClick: (url: string) => void;
};

const PageLink = ({ url, label, active, onClick }: TProps) => {
  return (
    <Button onClick={() => onClick(url)} active={active}>
      {label}
    </Button>
  );
};

export default PageLink;
