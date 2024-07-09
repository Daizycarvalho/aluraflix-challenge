import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useVideosContext } from '../../context/Videos'; // Importe o contexto de vídeos

const StyledVideoCard = styled.div`
    max-width: 390px;
    min-width: 390px;
    margin-bottom: 40px;
    @media screen and (min-width: 1024px){
        max-width: 430px;
        min-width: 430px;
    }
`;

const StyledVideoImage = styled.div`
    width: 100%;
    min-height: 175px;
    background: url(${(props) => props.$bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 5px solid ${(props) => props.$color};
    border-radius: 4px 4px 0 0;
    box-shadow: 0px 0px 17px 8px ${(props) => props.$color} inset;
`;

const StyledParagraph = styled.p`
    text-align: center;
    background-color: #000000;
    border-left: 5px solid ${(props) => props.$color};
    border-right: 5px solid ${(props) => props.$color};
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    padding: 10px 0;
`;

const StyledCardButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #000000;
    border: 5px solid ${(props) => props.$color};
    border-top: none;
    border-radius: 0px 0px 15px 15px;
`;

const StyledCardButton = styled.button`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    font-size: 1rem;
    cursor: pointer;
`;

const deleteIcon = "/path/to/delete-icon.png";
const editIcon = "/path/to/edit-icon.png";

const VideoCard = ({ color, video }) => {
    const videosContext = useVideosContext(); // Utilize o contexto de vídeos

    const handleDeleteClick = () => {
        videosContext.deleteVideo(video.id); // Chame a função do contexto para deletar o vídeo pelo ID
    };

    const handleEditClick = () => {
        videosContext.editVideo(video); // Chame a função do contexto para editar o vídeo
    };

    return (
        <StyledVideoCard>
            <Link to={`/${video.id}`}>
                <StyledVideoImage $color={color} $bgImage={video.cover} />
                <StyledParagraph $color={color}>{video.title}</StyledParagraph>
            </Link>
            <StyledCardButtonsContainer $color={color}>
                <StyledCardButton onClick={handleDeleteClick}>
                    <img src={deleteIcon} alt="botão deletar vídeo" />
                    DELETAR
                </StyledCardButton>
                <StyledCardButton onClick={handleEditClick}>
                    <img src={editIcon} alt="botão editar vídeo" />
                    EDITAR
                </StyledCardButton>
            </StyledCardButtonsContainer>
        </StyledVideoCard>
    );
};

export default VideoCard;
