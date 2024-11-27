import { useState, useEffect } from 'react';
import LoginModal from '../../components/modal/Login';
import PetForm from '../../components/forms/PetForm';
import { ButtonGroup, HeaderButton, Logo, StyledHeader } from './Header.style';

export default function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isPetFormModalOpen, setIsPetFormModalOpen] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsUserLoggedIn(true);
        }
    }, []);

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const togglePetFormModal = () => {
        setIsPetFormModalOpen(!isPetFormModalOpen);
    };

    const logoutUser = () => {
        localStorage.setItem('token', '');
        setIsUserLoggedIn(false);
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
                {isUserLoggedIn ? (
                    <HeaderButton onClick={logoutUser}>Sair</HeaderButton>
                ) : (
                    <HeaderButton onClick={toggleLoginModal}>Entrar</HeaderButton>
                )}
            </ButtonGroup>

            {isLoginModalOpen && <LoginModal closeModal={toggleLoginModal} />}
            {isPetFormModalOpen && <PetForm closeModal={togglePetFormModal} />}
        </StyledHeader>
    );
}
