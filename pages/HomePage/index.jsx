import React from 'react';
import VideoCard from '../../components/VideoCard'; // Caminho corrigido para VideoCard.jsx
import { useVideosContext } from '../../context/Videos'; 

const StyledBanner = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
`;

const Logo = styled.img`
  max-width: 150px;
  height: auto;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
`;

const NavigationButton = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
`;

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const HomePage = () => {
  const { videos } = useVideosContext();

  return (
    <StyledHomePage>
      <StyledBanner>
        <Logo src="/path/to/logo.png" alt="Logo" />
      </StyledBanner>

      <Navigation>
        <NavigationButton to="/">Home</NavigationButton>
        <NavigationButton to="/criar-video">Criar Vídeo</NavigationButton>
      </Navigation>

      <VideoContainer>
        {videos.map((video) => (
          <VideoCard key={video.id} color={video.category.color} video={video} />
        ))}
      </VideoContainer>

      <Footer>
        &copy; {new Date().getFullYear()} Seu Nome / Empresa
      </Footer>
    </StyledHomePage>
  );
};

export default HomePage;

  
