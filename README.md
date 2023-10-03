# riderize-back

## Requisitos para rodar o projeto

### Setup de ambiente:

  - *Docker (v20+)*
  - *Docker Compose (v1.29+)*

### Como rodar na minha máquina:

  - *Clone o projeto:*
  ```
    git clone git@github.com:TiagoPaz2000/riderize-back.git
  ```

  - *Renomeie o arquivo .env.example para .env apenas*
  ```
    mv .env.example .env
  ```

  - *Inicie o docker compose:*
  ```
    npm run compose:up
  ```

  - *Acesse a documentação:*
  ```
    http://localhost:3001 (porta padrão definida)
  ```

### Estrutura do projeto

  - O servidor inicia no arquivo `./src/server.ts`
  - `./src/infra`: É a camada responsável por configurar e iniciar o servidor apollo e também a conexão com o banco de dados.
  - `./src/main`: Responsável por fornecer os resolvers e types defs do graphql.
  - `./src/presentation`: Camada que conecta o client com o domínio da aplicação.
    - `./src/presentation/controllers`: Concentra todas as regras de negócio da aplicação.
    - `./src/presentation/adapters`: Faz a ponte entre o domínio e a execução da regra de negócio.
    - `./src/presentation/factories`: Faz a instanciação de todas as controllers e suas dependências.
  - `./src/domain`: Camada reponsável por definir entidades e casos de uso.
  - `./tests`: Diretório com os testes automatizados da API.