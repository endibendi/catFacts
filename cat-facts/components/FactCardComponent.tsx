import styled from "styled-components";
import LikeButton from "../components/LikeButton";
import { IoHeartDislikeOutline, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

const FactCard = styled.div`
  margin-bottom: 81px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 24px;
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

  @media screen and (min-width: 768px) {
    max-width: 460px;
  }
`;

type TProps = {
  catFact: string;
};

const FactCardComponent = ({ catFact }: TProps) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    if (disliked) {
      setDisliked(false);
    }
    setLiked(!liked);
  };
  const handleDislikeClick = () => {
    if (liked) {
      setLiked(false);
    }
    setDisliked(!disliked);
  };

  return (
    <FactCard>
      <Text>{catFact}</Text>
      <LikeButtonContainer>
        <LikeButton
          title="like"
          liked={liked}
          disliked={disliked}
          primary
          onClick={handleLikeClick}
          icon={<IoHeartOutline />}
        />
        <LikeButton
          title="dislike"
          liked={disliked}
          disliked={disliked}
          onClick={handleDislikeClick}
          icon={<IoHeartDislikeOutline />}
        />
      </LikeButtonContainer>
    </FactCard>
  );
};

export default FactCardComponent;
