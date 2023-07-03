Cashlizer, um projeto em Node.js com TypeScript

Este é um projeto simples de API em Node.js com TypeScript para gerenciar usuários. A API foi projetada usando Express.js e se comunica com um banco de dados PostgreSQL.

Estrutura do Banco de Dados
A estrutura da tabela users possui os seguintnes atrinutos:
  * id: Chave primaria para registro dos usuarios no banco de dados.
  * name: Nome do usuario.
  * cpf: Cpf do usuario.
  * email: Email para aurhenticação de contato.
  * cellphone: Telefone para contato.
  * created_at: Data que o usuario foi registrado

Para inicializar o projeto
  => Clone o repositório: git clone https://github.com/kadioba/cashlizer-api.git
  => Instale as dependências: npm i
  => Crie o banco de dados e adicione o acesso ao arquivo .env

Testando as funcionalidades da API
A API possui as seguintes rotas:

* GET /users: Retorna uma lista de usuários.
* GET /users/id: Retorna um usuário com base no ID.
* POST /users: Cria um novo usuário.
* DELETE /users/id: Remove um usuário com base no ID.
* PUT /users/id: Atualiza as informações de um usuário.
Para testar estas rotas, você pode usar ferramentas como Postman ou curl.

Arquitetura e Documentação do Projeto
O projeto segue uma arquitetura que divide a aplicação em roteadores (routers), controladores (controllers), serviços (services), repositórios (repositories), middlewares e esquemas (schemas). Essa divisão é feita para separar as responsabilidades de cada parte da aplicação, seguindo o princípio de responsabilidade única.

Roteadores (Routers)
Os roteadores são usados para encaminhar as requisições HTTP para a função correta.

Controladores (Controllers)
Os controladores gerenciam as requisições HTTP e enviam respostas para o cliente.

Serviços (Services)
Os serviços contêm a lógica de negócio principal do aplicativo.

Repositórios (Repositories)
Os repositórios lidam com a interação com o banco de dados.

Middlewares
Middlewares são funções que têm acesso ao objeto de solicitação (request), ao objeto de resposta (response), e à próxima função middleware no ciclo de solicitação/resposta da aplicação. Eles são usados para modificar req e res ou para executar qualquer tipo de verificação.

Esquemas (Schemas)
Os esquemas são usados para validar os dados que vêm do cliente antes de atingir os controladores.

Este projeto é uma prova de conceito para demonstrar um simples sistema de gerenciamento de usuários usando Node.js, TypeScript, Express.js e PostgreSQL.
