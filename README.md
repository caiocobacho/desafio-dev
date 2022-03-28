#  Executar projecto front-end 
- Primeiramente vá ao diretorio da pasta front-end.
- cd front-end 
### Como executar a aplicação frontend
- Para executar a aplicação: `yarn start` ou `npm run start`
- A aplicação frontend estará disponível no endereço: `http://localhost:4200`.

### Como executar os testes
- Para executar os testes unitários: `yarn test` ou  `npm run test`.
- Para executar a cobertura dos testes unitários: `yarn test:cov` ou `npm test:cov`.


#  Como executar projeto API Backend
- Primeiramente vá ao diretorio da pasta backend.
- cd back-end 

### Subindo o banco de dados
Observação: É necessario docker, para download do docker: https://www.docker.com/products/docker-desktop/
- Após instalar o docker
- Executar o comando no terminal: `docker-compose up -d`.

### Como executar a API
- Para executar a API: `yarn start ou npm start`.
- Para executar a API em modo watch: `yarn start:dev ou npm start:dev`.
- A API ficará ativa  no endereço: `http://localhost:3000`.

### Como executar os testes
- para rodar os testes unitários: `yarn test ou npm test`.
- para ver a cobertura dos testes unitários: `yarn test:cov ou npm run test:cov`.
