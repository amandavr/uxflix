import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: #000;
    color: #fff;
    flex: 1;
    padding: 5%;
`;

function Base({ children }) {
    return (
        <>
            <Menu/>
                <Main>
                    { children }
                </Main>
            <Footer/>
        </>
    )
}

export default Base