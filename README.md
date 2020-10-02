# Post_Express
 
 
 Descrição:
Uma Aplicação de postagem de mensagem utilizando o framework EXPRESS. Também foi usado os módulos Sequelize, Hadlebars, Body-Parser.


Detalhamento:
Adicionar novo post
 ![alt text](https://prnt.sc/us1ida)
https://prnt.sc/us1ida
Na Home do Sistema no caminho (“/”), a um botão adicionar novo post, com ele você será direcionado para o caminha de criação de post (“/cad”).
 
https://prnt.sc/us1ctp

Criando um post dando um título e o conteúdo e apertar em “Cadastrar”, ambos serão enviados pelo modulo Post 
Modulo Post chama o Sequelize, que está no modulo “db” e logo em seguida cria a um novo id no banco de dados 
https://prnt.sc/us1hy0

Logo em seguido o banco envia o novo post para o endereço “/” home.
https://prnt.sc/us1jhv
observações:
Express: framework muito interessante que é muito focado em rotas
Sequelize: modulo com o objetivo de facilitar a utilização do banco de dados via NodeJS 
Body-Parse: facilitar a passagem de parâmetro da página para o servidor de um modo fácil e seguro.
Handlebars: aprendi que ao usar o handlebars deve se atentar a versão dele pois algumas versões não permite o requerimento dos dados para o cliente
Fim
fim desse pequeno projeto, que teve o intuito de me ajudar na expansão do meu conhecimento em NodeJS, Express, e ate banco de dados com o Sequelize
