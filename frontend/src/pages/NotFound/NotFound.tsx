import { CatImage, ErrorMessage, HomeButton, Message, NotFoundContainer } from "./NotFound.style";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <div>
        <ErrorMessage>404</ErrorMessage>
        <Message>Oops! A página que você procura não existe!</Message>
        <HomeButton to="/">Voltar ao Início</HomeButton>
      </div>
      <CatImage src="lost_cat.png" alt="Gato olhando para a esquerda" />
    </NotFoundContainer>
  );
}