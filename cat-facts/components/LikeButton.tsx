import { ReactElement } from "react";
import styled from "styled-components";

const Button = styled.button<{ primary }>`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 14px 15px 12px 15px;
  border: ${({ primary }) => (primary ? "1px solid #000" : "none")};
  background-color: #fff;
  font-family: inherit;
  font-size: 24px;

  &:hover {
    color: #df2929;
    border-color: #df2929;
  }
`;

const Icon = styled.span`
  width: 24px;
  height: 24px;
  line-height: 24px;
  margin-right: 8px;
`;

type TProps = {
  title: string;
  onClick: () => void;
  primary?: boolean;
  icon: ReactElement;
};

const LikeButton = ({ title, onClick, primary = false, icon }: TProps) => {
  return (
    <Button onClick={onClick} primary={primary}>
      <Icon>{icon}</Icon>
      {title}
    </Button>
  );
};

export default LikeButton;
