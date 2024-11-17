import { SectionWrapper } from "./HowItWorks.style";

export default function HowItWorks() {
    return (
        <SectionWrapper>
            <div className="text-container">
                <h2>Como funciona o Buscapet</h2>
                <p>No Buscapet, cada detalhe conta e cada esforço é valorizado. Estamos aqui para apoiar você, oferecendo uma ferramenta prática e confiável para que você possa se concentrar no que realmente importa: encontrar o seu amigo ou ajudar outro a encontrá-lo.</p>
                <p>Obrigado por fazer parte dessa missão conosco. <br/>Juntos, podemos fazer a diferença.</p>
            </div>
            <div className="howitworks-image">
                <img src="beagle.png" alt="About Image" />
            </div>
        </SectionWrapper>
    );
}
