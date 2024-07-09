import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../Form/FormInput';
import { useVideosContext } from '../../context/Videos'; // Importe o contexto corretamente

const StyledNewCategoryForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 575px;
    margin: 0 auto;
`;

const StyledNewCategoryButton = styled.button`
    width: 180px;
    height: 54px;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: 900;
    color: #FFFFFF;
    border: 3px solid #2271D1;
    border-radius: 15px;
    align-self: center;
`;

const NewCategoryForm = () => {
    const videoContext = useVideosContext();
    const [newCategory, setNewCategory] = useState('');
    const [newColor, setNewColor] = useState('#000000');

    const formSubmit = (event) => {
        event.preventDefault();
        const addCategory = {
            area: newCategory,
            color: newColor
        };
        videoContext.addCategory(addCategory);
        videoContext.categoryModal(false); // Corrigido: utiliza videoContext.categoryModal ao invés de videoContext.toggleCategoryModal
    };

    return (
        <StyledNewCategoryForm onSubmit={formSubmit}>
            <FormInput
                color='#6BD1FF'
                label="Nova Área"
                id="newCategory"
                type="text"
                value={newCategory}
                placeholder="Insira o nome da Área"
                handleChange={(value) => setNewCategory(value)}
            />
            <FormInput
                color='#6BD1FF'
                label="Cor da Área"
                id="newColor"
                type="color"
                value={newColor}
                handleChange={(value) => setNewColor(value)}
            />
            <StyledNewCategoryButton type="submit">
                Salvar
            </StyledNewCategoryButton>
        </StyledNewCategoryForm>
    );
};

export default NewCategoryForm;

