import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/uxflix-logo.png';
import Button from "../Button";
import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="uxflix logo" />
            </a>

            <Button as={ Link } className="ButtonLink" to="/cadastro/video">
                Adicionar Vídeo
            </Button>
        </nav>
    );
}

export default Menu;