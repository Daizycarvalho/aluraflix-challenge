import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";
import { useVideosContext } from "../../context/Videos";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 575px;
    margin: 0 auto;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    max-width: 525px;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const StyledFormButton = styled.button`
    width: 180px;
    height: 54px;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: 900;
    color: #ffffff;
    border: 3px solid #2271d1;
    border-radius: 15px;
    &.white {
        border: 3px solid #ffffff;
    }
`;

const Form = ({ method, video }) => {
    const videoContext = useVideosContext();
    const [videoTitle, setVideoTitle] = useState("");
    const [videoArea, setVideoArea] = useState("");
    const [videoCover, setVideoCover] = useState("");
    const [videoVideo, setVideoVideo] = useState("");
    const [videoDescription, setVideoDescription] = useState("");

    useEffect(() => {
        if (video) {
            setVideoTitle(video.title);
            setVideoArea(video.area);
            setVideoCover(video.cover);
            setVideoVideo(video.link);
            setVideoDescription(video.description);
        }
    }, [video]);

    function formSubmit(event) {
        event.preventDefault();
        videoContext.editCard(null);
        const newVideo = {
            title: videoTitle,
            cover: videoCover,
            link: videoVideo,
            area: videoArea,
            description: videoDescription,
        };

        if (video) {
            newVideo.id = video.id;
            videoContext.updateVideo(newVideo);
        } else {
            videoContext.addVideo(newVideo);
        }
        clearFields();
    }

    function clearFields() {
        setVideoTitle("");
        setVideoArea("");
        setVideoCover("");
        setVideoVideo("");
        setVideoDescription("");
    }

    return (
        <StyledForm onSubmit={(event) => formSubmit(event)}>
            <FormInput
                color={method ? "#6BD1FF" : "#696969"}
                label="Título"
                id="title"
                type="text"
                value={videoTitle}
                placeholder="Insira o Título do vídeo"
                handleChange={(value) => setVideoTitle(value)}
            />
            <FormSelect
                color={method ? "#6BD1FF" : "#696969"}
                label="Área"
                id="area"
                categories={videoContext.categories}
                value={videoArea}
                handleChange={(value) => setVideoArea(value)}
            />
            <FormInput
                color={method ? "#6BD1FF" : "#696969"}
                label="Capa"
                id="cover"
                type="url"
                value={videoCover}
                placeholder="Insira o link da imagem da capa do vídeo"
                handleChange={(value) => setVideoCover(value)}
            />
            <FormInput
                color={method ? "#6BD1FF" : "#696969"}
                label="Vídeo"
                id="link"
                type="url"
                value={videoVideo}
                placeholder="Insira o link do vídeo"
                handleChange={(value) => setVideoVideo(value)}
            />
            <FormTextArea
                color={method ? "#6BD1FF" : "#696969"}
                label="Descrição"
                id="description"
                value={videoDescription}
                placeholder="Insira a descrição do vídeo"
                handleChange={(value) => setVideoDescription(value)}
            />
            <StyledButtonContainer>
                <StyledFormButton type="submit">Gravar</StyledFormButton>
                <StyledFormButton className="white" type="button" onClick={clearFields}>
                    Limpar
                </StyledFormButton>
            </StyledButtonContainer>
        </StyledForm>
    );
};

export default Form;