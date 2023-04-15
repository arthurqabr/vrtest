# vrtest


# :hammer: Para testar o Front-End 

Vá para o diretório "frontend" utilizando `$ cd frontend`

Para instalar todas as depedendências, execute este comando:
`$ yarn` ou `$ npm i`

Após a finalização da instalação das dependências, utilize o comando `$ yarn e2e` ou `$ npm run e2e`.

Ao executar, será exibida a tela abaixo:

<img width="1312" alt="image" src="https://user-images.githubusercontent.com/96924797/231897280-23faa384-b78d-452c-bc25-dfe42211b9b3.png">

Selecione a opção <b>"E2E Testing"</b>

Selecione o navegador de sua preferência e pressione o botão <b>"Start E2E Testing in ..."</b>

<img width="1312" alt="image" src="https://user-images.githubusercontent.com/96924797/231897592-afd738cb-478c-4838-8dd0-31b76768627b.png">

Selecione o arquivo `1-test.cy.js` e o script será executado.


# :hammer: Para testar o Back-End

Vá para o diretório "backend" utilizando `$ cd backend`

Execute o comando `$ gem install bundler`

Ao finalizar a execução, execute `$ bundler install`

Fo finalizar novamente, execute `cucumber --init`

Com tudo instalado corretamente, execute o comando `$ cucumber` e o script será executado:

<img width="1065" alt="image" src="https://user-images.githubusercontent.com/96924797/231903436-52887882-3202-4097-bd65-38feae4fd97e.png">
