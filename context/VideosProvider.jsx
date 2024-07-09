// Arquivo VideosProvider.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const videosApiUrl = 'http://localhost:3000/videos';
const categoriesApiUrl = 'http://localhost:3000/categories';

export const VideosContext = createContext();

const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(videosApiUrl);
                setVideos(response.data);
            } catch (error) {
                console.error('Erro ao carregar vídeos:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get(categoriesApiUrl);
                setCategories(response.data);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            }
        };

        fetchVideos();
        fetchCategories();
    }, []);

    const categoryModal = (isOpen) => {
        setIsCategoryModalOpen(isOpen);
    };

    const addCategory = async (newCategory) => {
        try {
            const response = await axios.post(categoriesApiUrl, newCategory);
            setCategories([...categories, response.data]);
        } catch (error) {
            console.error('Erro ao adicionar categoria:', error);
        }
    };

    const editVideo = async (updatedVideo) => {
        try {
            const response = await axios.put(`${videosApiUrl}/${updatedVideo.id}`, updatedVideo);
            setVideos(prevVideos =>
                prevVideos.map(video => (video.id === updatedVideo.id ? response.data : video))
            );
        } catch (error) {
            console.error('Erro ao editar vídeo:', error);
        }
    };

    const deleteVideo = async (videoToDelete) => {
        try {
            await axios.delete(`${videosApiUrl}/${videoToDelete.id}`);
            setVideos(prevVideos => prevVideos.filter(video => video.id !== videoToDelete.id));
        } catch (error) {
            console.error('Erro ao deletar vídeo:', error);
        }
    };

    return (
        <VideosContext.Provider
            value={{
                videos,
                setVideos,
                categories,
                setCategories,
                selectedVideo,
                setSelectedVideo,
                isCategoryModalOpen,
                categoryModal,
                addCategory,
                editVideo,
                deleteVideo,
            }}
        >
            {children}
        </VideosContext.Provider>
    );
};

export const useVideosContext = () => useContext(VideosContext);

export default VideosProvider;

