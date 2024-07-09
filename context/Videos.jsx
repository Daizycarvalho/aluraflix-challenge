import React, { createContext, useContext, useState } from 'react';

const VideosContext = createContext();

export const useVideosContext = () => useContext(VideosContext);

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Título do Vídeo',
      cover: 'https://example.com/cover.jpg',
      link: 'https://www.youtube.com/embed/videoId',
      color: '#6BD1FF',
      description: 'Descrição do vídeo...',
    },
    // Adicionar outros vídeos conforme necessário
  ]);

  const addVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const editVideo = (editedVideo) => {
    const updatedVideos = videos.map((video) =>
      video.id === editedVideo.id ? editedVideo : video
    );
    setVideos(updatedVideos);
  };

  return (
    <VideosContext.Provider
      value={{ videos, addVideo, deleteVideo, editVideo }}
    >
      {children}
    </VideosContext.Provider>
  );
};
