import styled from "styled-components";
import LikeButton from "../components/LikeButton";
import { IoHeartDislikeOutline, IoHeartOutline } from "react-icons/io5";

const FactCard = styled.div`
  margin-bottom: 54px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 36px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;

const LikeButtonContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 330px;
`;

type TProps = {
  catFact: string;
};

const FactCardComponent = ({ catFact }: TProps) => {
  return (
    <FactCard>
      <Text>{catFact}</Text>
      <LikeButtonContainer>
        <LikeButton
          title="like"
          primary
          onClick={() => {}}
          icon={<IoHeartOutline />}
        />
        <LikeButton
          title="dislike"
          onClick={() => {}}
          icon={<IoHeartDislikeOutline />}
        />
      </LikeButtonContainer>
    </FactCard>
  );
};

export default FactCardComponent;
