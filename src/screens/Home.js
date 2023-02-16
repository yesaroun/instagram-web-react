import styled from "styled-components";
import Avatar from "../components/Avartar";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  margin-bottom: 60px;
  max-width: 650px;
  background-color: white;
`;

const FeedHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid rgba(239, 239, 239);
`;

const Nickname = styled.div`
  margin-left: 10px;
  font-weight: 600;
`;

const FeedPhoto = styled.img`
  width: 100%;
  max-width: 100%;
`;

const FeedActions = styled.div`
  display: flex;
`;

function Home() {
  return (
    <FeedContainer>
      <FeedHeader>
        <Avatar
          lg
          url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenaqua.hu%2Fen%2Fhal-sziami-harcoshal-betta-splendens-dumbo.html&psig=AOvVaw2MQ-lkIZ-dEKY_Izsofbf2&ust=1676622423958000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiLkbbPmf0CFQAAAAAdAAAAABAD"
        />
        <Nickname>Kickname</Nickname>
      </FeedHeader>
      <FeedPhoto src="https://wooarts.com/wp-content/uploads/sites/1/nggallery/amazing-beta-fish/amazing-beta-fish-shots-wooarts-01.jpg"/>
    </FeedContainer>
  );
}

export default Home;
