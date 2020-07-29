import React from 'react';
import Logo from '../../assets/images/uxflix-logo.png';
import Button from "../Button";
import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="uxflix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Adicionar Vídeo
            </Button>
        </nav>
    );
}

export default Menu;