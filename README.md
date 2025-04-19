## Como executar localmente?
Preencher o .env com a url do banco postgres seguindo o .env-example

Foi utilizado o node 23.11

Instalar as dependências
```bash
$ npm install
```

Preparar banco de dados utilizando o prisma (importante já ter uma url de banco de dados válida)
```bash
$ npx prisma migrate reset
```

Iniciar o servidor em modo desenvolvimento
```bash
$ npm start
```

O servidor é executado na porta 3000
A documentação swagger fica na rota http://localhost:3000/api

<img width="1426" alt="image" src="https://github.com/user-attachments/assets/eae69eed-1542-4058-a7e1-62753d1422e4" />


## Script de teste
O script testAPI.js foi utilizado para testar a API simulando um usuário real usando axios
