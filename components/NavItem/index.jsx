import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import homeIcon from '../../images/home.png';
import newVideoIcon from '../../images/new-video.png';

const StyledNavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    > p {
        display: flex;
        align-items: center;
        gap: 5px;
        border: 2px solid #2271D1;
        border-radius: 50px;
        padding: 6px 20px;
        background: #2271D13D;
        color: #2271D1;
        font-weight: 900;
        font-size: 1.25rem;
    }
`;

const NavItem = ({ url, image, activeImage, children, reverse }) => {
    const activeRoute = useLocation().pathname;
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize <= 1024 ? (
        activeRoute === "/" || activeRoute === "/newvideo" ? (
            <StyledNavDiv style={reverse ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}>
                <p>
                    <img src={activeImage} alt="Icone Ativo" />
                    {children}
                </p>
                <Link to={url}>
                    <img src={image} alt="Icone" />
                </Link>
            </StyledNavDiv>
        ) : (
            <StyledNavDiv>
                <Link to="/">
                    <img src={homeIcon} alt="Ícone de Home" />
                </Link>
                <Link to="/newvideo">
                    <img src={newVideoIcon} alt="Ícone de Novo Vídeo" />
                </Link>
            </StyledNavDiv>
        )
    ) : (
        <StyledNavDiv>
            <Link to="/">
                <Button isActive={activeRoute === "/"}>HOME</Button>
            </Link>
            <Link to="/newvideo">
                <Button isActive={activeRoute === "/newvideo"}>NOVO VIDEO</Button>
            </Link>
        </StyledNavDiv>
    );
};

export default NavItem;
