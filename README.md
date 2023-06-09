# Projeto Costs

## Descrição

Este é um sistema de gerenciamento de projetos. Ele permite criar, visualizar, editar e excluir projetos, bem como atribuir categorias e orçamentos a eles. Além disso, você pode acompanhar o custo total de cada projeto com base nos serviços adicionados.

## Tecnologias Utilizadas

<p align="left">
<a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://nodejs.org/en/docs/guides" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="MySQL" /></a>
</p>

## Funcionalidades

O sistema possui as seguintes funcionalidades principais:

- Listar todos os projetos existentes.
- Criar um novo projeto, fornecendo nome, orçamento e categoria.
- Visualizar os detalhes de um projeto específico, incluindo seu nome, orçamento, categoria, custo atual e serviços adicionados.
- Adicionar serviços a um projeto para acompanhar os custos individuais.
- Editar as informações de um projeto, como nome, orçamento, categoria e serviços.
- Excluir um projeto existente.
- Listar todas as categorias disponíveis.

## Requisitos

Certifique-se de ter os seguintes requisitos instalados no seu ambiente de desenvolvimento:

- Node.js
- npm

## Instalação

1. Clone este repositório:

```git clone https://github.com/seu-usuario/costs.git```

2. Navegue até o diretório do projeto:

```cd costs```

3. Instale as dependências do projeto:

 - ```npm json-server``` (Simula backend fake)
 - ```npm react icons``` (Biblioteca de ícones para serem usados no projeto)
 - ```react-router-dom``` (Resolve problemas de rotas para as páginas de um site)
 - ```uuid``` (Crie id únicos quando necessários para o projeto)

 4. Inicie o servidor local:

 ```npm start```

 5. O servidor estará em execução em `http://localhost:3000`.

 ## Uso

1. Acesse o sistema usando seu navegador web e vá para `http://localhost:3000`.
2. Você verá a lista de projetos existentes.
3. Explore as diferentes funcionalidades do sistema, como criar um novo projeto, visualizar os detalhes de um projeto, editar informações de um projeto ou excluir um projeto existente.
4. Você também pode listar todas as categorias disponíveis.

## Arquivo db.json

O arquivo `db.json` contém os dados dos projetos e categorias do sistema. Certifique-se de atualizá-lo adequadamente se você adicionar, editar ou excluir projetos ou categorias.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema, bug ou tiver alguma sugestão de melhoria, fique à vontade para abrir uma nova issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

