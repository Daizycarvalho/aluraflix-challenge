import React from 'react';
import { useVideosContext } from '../../context/Videos'; // Ajuste o caminho conforme a estrutura real

const BasePage = () => {
    const { videos } = useVideosContext();

    return (
        <div>
            <h1>Base Page</h1>
            <ul>
                {videos.map(video => (
                    <li key={video.id}>
                        {video.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BasePage;

