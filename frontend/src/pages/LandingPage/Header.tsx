import { useState } from 'react';
import LoginModal from '../../components/modal/Login';
import PetForm from '../../components/forms/PetForm';
import { ButtonGroup, HeaderButton, Logo, StyledHeader } from './Header.style';

export default function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isPetFormModalOpen, setIsPetFormModalOpen] = useState(false);

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const togglePetFormModal = () => {
        setIsPetFormModalOpen(!isPetFormModalOpen);
    };

    return (
        <StyledHeader>
            <Logo>
                <a href="/">
                    <span>busca</span>
                    <span>pet</span>
                </a>
            </Logo>
            <ButtonGroup>
                <HeaderButton onClick={togglePetFormModal}>Anunciar</HeaderButton>
                <HeaderButton onClick={toggleLoginModal}>Entrar</HeaderButton>
            </ButtonGroup>

            {isLoginModalOpen && <LoginModal closeModal={toggleLoginModal} />}
            {isPetFormModalOpen && <PetForm closeModal={togglePetFormModal} />}
        </StyledHeader>
    );
}
