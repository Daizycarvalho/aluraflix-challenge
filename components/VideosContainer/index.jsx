import React from 'react';
import { useVideosContext } from '../../context/Videos'; // Caminho relativo ao contexto

const VideosContainer = () => {
    const { videos } = useVideosContext();

    return (
        <div className="videos-container">
            {videos.map(video => (
                <div key={video.id} className="video">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <iframe
                        width="560"
                        height="315"
                        src={video.embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default VideosContainer;

