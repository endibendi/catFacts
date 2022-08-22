import styled from "styled-components";

const Button = styled.button`
  margin: auto;
  padding: 22px 30px 20px 30px;
  border: 1px solid #000;
  background-color: #fff;
  font-family: inherit;
  font-size: 24px;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

type TProps = {
  title: string;
  onClick: () => void;
};

const PrimaryButton = ({ title, onClick }: TProps) => {
  return <Button onClick={onClick}>{title}</Button>;
};

export default PrimaryButton;
