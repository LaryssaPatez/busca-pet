import { useNavigate } from "react-router-dom";
import { PageWrapper } from "./SignUp.style";

export default function SignUp() {
    const navigate = useNavigate();

    const handleButtonClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        
        // Adicione aqui a lógica de envio do formulário, se houver
        console.log("Formulário enviado com sucesso!");

        // Redireciona para a rota desejada após o envio
        navigate('/'); // Substitua pela rota de destino
    };

    return (
        <PageWrapper>
            <img src="/register_dog.jpg" alt="Cachorro bege" />
            <form onSubmit={handleButtonClick}>
                <h1>Cadastro</h1>
                <label htmlFor="input-email">
                    Email *
                    <input type="text" placeholder="E-mail" id="input-email" required />
                </label>
                <label htmlFor="input-senha">
                    Senha *
                    <input type="password" placeholder="******" id="input-senha" required />
                </label>
                <label htmlFor="input-nome">
                    Nome *
                    <input type="text" placeholder="Nome" id="input-nome" required />
                </label>
                <label htmlFor="input-telefone">
                    Telefone
                    <input type="text" placeholder="Telefone" id="input-telefone" />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </PageWrapper>
    );
}