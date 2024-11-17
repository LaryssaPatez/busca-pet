import { IoArrowUpSharp } from "react-icons/io5";
import { StyledFooter } from "./Footer.style";
import PetForm from "../../components/forms/PetForm";
import { useState } from "react";

export default function Footer() {
    const [isPetFormModalOpen, setIsPetFormModalOpen] = useState(false);
    const togglePetFormModal = () => {
        setIsPetFormModalOpen(!isPetFormModalOpen);
    };

    return (
        <>
            <StyledFooter>
                <div>
                    <h1>buscapet</h1>
                    <a href="/"><IoArrowUpSharp /></a>
                </div>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/search">Busca</a></li>
                    <li><a onClick={togglePetFormModal}>Anunciar</a></li>
                </ul>

                <p>2024 &#169; Buscapet <span>Todos os direitos reservados</span></p>
            </StyledFooter>
            {isPetFormModalOpen && <PetForm closeModal={togglePetFormModal} />}
        </>
    )
}
