# API_REST
Está é uma API REST, feita em nodejs e com acesso ao banco de dados PostgreSQL. Essa API possui o serviço de autenticação de usuários, ela pode adicionar, remover, validar e atualizar os dados de usuários cadastrados.

## Quais modulos são necessários para o projeto?
- Basta instalar o **express**, para trabalhar com as rotas do micro serviço com **npm install express**
- Instale também o **http-status-codes** opcionalmente para que ele retorne o status code com **npm install http-status-code**
- Instale também o **pg** para conseguir trabalhar com mais facilidade com o **banco de dados postgrees** com **npm install pg**, a string de conexão do banco de dados pode ser gerada em qualquer banco postgrees, uma boa opção para esse projeto que não necessita fazer instalação local, é utilizar o [ElephantSQL](https://www.elephantsql.com), uma opção gratuita de banco de dados postgrees online, que fornece 20mb no plano gratuito. Não é necessário informar o cartão de crédito.

## Como testar ?
- Após clonar o repositório, instale todas as dependencias.
- Execute seus testes em localhost na porta 3000.
