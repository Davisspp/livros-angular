# Catálogo de Livros — Trabalho Prático DGT2809

Projeto Angular completo, pronto para rodar. Todo o código já está feito
(entidades, serviços, componentes, rotas, Bootstrap).

## Como rodar

1. Descompacte esta pasta em algum lugar do seu computador (ex: `Documents`)
2. Abra o terminal (PowerShell) **dentro dessa pasta**
3. Instale as dependências (baixa tudo que falta — só precisa fazer isso uma vez):
   ```powershell
   npm install
   ```
4. Rode o projeto:
   ```powershell
   ng serve
   ```
5. Espere aparecer `✔ Compiled successfully` no terminal
6. Abra o navegador (Chrome/Edge) e digite na barra de endereço:
   ```
   http://localhost:4200
   ```

## O que você vai ver

- **Página "Listagem"**: tabela com os livros (3 exemplos já cadastrados),
  nome da editora, lista de autores, e botão para excluir
- **Página "Cadastrar Livro"**: formulário para adicionar um novo livro, com
  validação obrigatória de título e editora; ao salvar, volta pra listagem

## Entrega no GitHub

Se ainda não tem o Git instalado, baixe em: https://git-scm.com/download/win

Depois, dentro da pasta do projeto:
```powershell
git init
git add .
git commit -m "Trabalho pratico DGT2809 - Catalogo de Livros"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO_NO_GITHUB>
git push -u origin main
```

(Crie antes um repositório vazio no site github.com e copie a URL dele.)

Depois, compartilhe o link do repositório com seu tutor na Sala de Aula
Virtual, aba "Trabalhos".

## Se der algum erro

- **Tela branca / erro no console (F12)**: me manda o print do erro
- **Erro no `npm install`**: confira se `node -v` e `npm -v` funcionam no
  terminal antes de tentar de novo
- **Porta 4200 ocupada**: rode `ng serve --port 4201` e acesse
  `http://localhost:4201`
