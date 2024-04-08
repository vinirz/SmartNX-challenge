![Banner do projeto](https://i.ibb.co/MNmhcQJ/thumb.png)

<p align="center">SmartNX ❇️ Concluído<p>

## 1.0 - Exercícios

Para executar os exercícios: 

1. Navegue até a página Exercícios `cd Exercicios`
2. Execute os códigos com `node 'arquivo.js'`

Os exercícios estão nomeados conforme seu número na prova que você pode encontrar clicando <a href="https://drive.google.com/file/d/173bS94rHMpNNW8SHBjazfso8XY1Sm6Rh/view">aqui<a/>

## 2.0 - SmartAPI

A SmartAPI é uma API em Node.js desenvolvida para facilitar a criação e gerenciamento de posts e comentários. Construída com Express.js e Sequelize ORM, a SmartAPI integra-se perfeitamente com bancos de dados MySQL, fornecendo uma plataforma robusta e eficiente para lidar com posts e comentários associados.

#### Como executar o projeto

1. Clone o repositório do projeto
2. Navegue até a pasta API `cd api`
3. Execute o comando `npm install` para instalar as dependências do projeto
4. Na pasta `src/config/database.js` insira as configurações para a conexão com o banco de dados
5. Crie o banco de dados referente ao projeto `npx sequelize db:create`
6. Execute o comando `npx sequelize db:migrate` para criar as tabelas no banco
7. Rode o projeto `npm start`

>[!NOTE]
>O servidor roda por padão em http://localhost:3333/

#### Rotas da API

| Função                    | Método | Endpoint                      | Body               | Query            |
| ------------------------- | ------ | ----------------------------- | ------------------ | ---------------- |
| ✅ Cadastrar posts         | POST   | **['/posts']**                | { title, content } | ❌                |
| ✅ Listar todos os posts   | GET    | **['/posts]**                 | ❌                  | ❌                |
| ✅ Listar post por id      | GET    | **['/post?id=']**             | ❌                  | id do post       |
| ✅ Atualizar post          | PUT    | **['/post?id=']**             | { title, content } | id do post       |
| ✅ Atualizar post          | PATCH  | **['/post?id=']**             | { title, content } | id do post       |
| ✅ Excluir um post         | DELETE | **['/post?id=']**             | ❌                  | ❌                |
| ✅ Adicionar um comentário | POST   | **['post/:post_id/comment']** | { content }        | id do post       |
| ✅ Excluir um comentário   | DELETE | **['comment?id=']**           | ❌                  | id do comentário |


#### Tecnologias utilizadas

- NodeJS
- Express
- Sequelize
- MySQL (xampp)

<br/>

### Autor

<img src="https://i.ibb.co/zVrqTPz/Mask-group.png" style="height: 250px">

Feito com  ❤️  por Vinicius Reis 😎
<div>

<a href="mailto:vrzotech@gmail.com">
<img src="https://i.ibb.co/bvmCX5b/badgemail.png">
</a>

<a href="https://www.instagram.com/vinirz11/">
<img src="https://i.ibb.co/2qLJ5Wd/badgeinsta.png">
</a>
