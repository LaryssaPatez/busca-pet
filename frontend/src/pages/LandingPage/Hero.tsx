import { useNavigate } from "react-router-dom";
import { StyledHero } from "./Hero.style";

export default function Hero() {
    const navigate = useNavigate();
    return (
        <StyledHero>
            <div className="hero-content">
                <h2>Bem-vindo ao Buscapet!</h2>
                <p>No Buscapet, entendemos a angústia e a esperança de quem está à procura de um amigo perdido. Criado com carinho pelos estudantes de <strong>Ciência da Computação da UNISAGRADO</strong>, nosso objetivo é ser um farol de esperança para donos de pets e amantes dos animais.</p>
                <p>Aqui, você pode divulgar a busca por um pet perdido ou ajudar a reunir um animal encontrado com seu verdadeiro lar. Juntos, queremos tornar o mundo um lugar mais seguro e acolhedor.</p>

                <div className="button-group">
                    <button onClick={() => navigate("/search")}>Perdi meu pet</button>
                    <button onClick={() => navigate("/search")}>Achei um pet</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="hero.png" alt="Hero Image" />
            </div>
        </StyledHero>
    );
}
