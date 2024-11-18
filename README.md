# BuscaPet 🐾
<p align="left">
    <img width=70 src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/>
    <img width=75 src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/>
    <img width=75 src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"/>
    <img width=75 src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFBe"/>
    <img width=105 src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

## Rodando localmente
**Clonar o repositório do backend e frontend**
```bash
git clone https://github.com/LaryssaPatez/busca-pet.git
```
### Backend
**1. Alterar o diretório da imagem dentro do projeto**
- No arquivo PostController.java, altere o diretório onde as imagens dos pets serão salvas. Certifique-se de configurar um caminho de diretório acessível para o servidor.
  
**2. Instalar o MySQL**
- Instale o MySQL em sua máquina local. Você pode baixar o MySQL [aqui](https://dev.mysql.com/downloads/installer/).
  
**3. Configurar o MySQL**
- Altere as credenciais de acesso no arquivo application.properties para corresponder à sua configuração do MySQL (exemplo: usuário, senha e URL do banco).
- Crie um banco de dados no MySQL com o nome buscapet.

**4. Subir o Backend na IDE**
- Abra o projeto do backend na sua IDE preferida (por exemplo, Eclipse).
- Se estiver usando Eclipse, instale o Spring Boot Tools através do marketplace:
  - Vá em Help > Eclipse Marketplace.
  - Pesquise por Spring Tools 4 e clique em Install.
- Importe o projeto e execute o backend.
  
### Frontend
**1. Instalar o Node.js**
- Certifique-se de ter o [Node.js v22.11](https://nodejs.org/pt) instalado em sua máquina. Caso não tenha, instale essa versão ou uma versão compatível.

**2. Instalar dependências**
- Navegue até o diretório do frontend
```bash
cd frontend
```
- Instale as depedências
```bash
npm install
```
- Para iniciar o frontend, use o comando
```bash
npm run dev
```
**3. Acessar a aplicação**
- Abra seu navegador e acesse http://localhost:5173 para visualizar a aplicação.

## Funcionalidades
- **Cadastro de Pets Perdidos:** Usuários podem criar publicações informando sobre animais de estimação perdidos, incluindo detalhes como nome, características físicas, local onde foi perdido e foto.
- **Cadastro de Pets Encontrados:** Pessoas que encontraram um animal podem criar publicações informando o animal encontrado, para que o dono possa ser identificado e reestabelecer o contato.
- **Busca e Filtros:** Sistema de busca por localização e tipo de pet para facilitar a procura.
- **Interação entre usuários:** Os usuários podem incluir seu telefone de contato na descrição do post, permitindo que donos e pessoas que encontraram animais possam se comunicar diretamente.

## Desenvolvedores

<table>
<thead>
<tr>

<th align="center" style="text-align: center;"><a href="https://github.com/mcoldibelli"><img src="https://avatars.githubusercontent.com/u/134847635?v=4" width="70" style="max-width: 100%;"><br><sub>@mcoldibelli</sub></a></th>
<th align="center" style="text-align: center;"><a href="https://github.com/LaryssaPatez"><img src="https://avatars.githubusercontent.com/u/132311199?v=4" width="70" style="max-width: 100%;"><br><sub>@laryssapatez</sub></a></th>
<th align="center" style="text-align: center;"><a href="https://github.com/HenriqueCanho"><img src="https://avatars.githubusercontent.com/u/119677892?v=4" width="70" style="max-width: 100%;"><br><sub>@HenriqueCanho</sub></a></th>
<th align="center" style="text-align: center;"><a href="https://github.com/saravilareal"><img src="https://avatars.githubusercontent.com/u/101808264?v=4" width="70" style="max-width: 100%;"><br><sub>@saravilareal</sub></a></th>
<th align="center" style="text-align: center;"><a href="https://github.com/fer-morais"><img src="https://avatars.githubusercontent.com/u/179770439?v=4" width="70" style="max-width: 100%;"><br><sub>@fer-morais</sub></a></th>
<th align="center" style="text-align: center;"><a href=""><img src="" width="70" style="max-width: 100%;"><br><sub>@samuel</sub></a></th>

</tr>
</thead>
</table>
