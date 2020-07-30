import React from 'react';
import Base from '../../../components/Base';

function CadastroCategoria() {
    return (
        <Base>
            <h1>cadastro de categoria</h1>

            <form>
                <label>Nome da Categoria</label>
                <input type="text" />
                <button>Cadastrar</button>
            </form>
        </Base>
    )
}

export default CadastroCategoria  