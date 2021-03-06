# GoBarber

_BACKEND_

https://github.com/vitalves/Rocketseat-bootcamp-modulo02

## Configurações iniciais feitas com:

`yarn add eslint -D`
`yarn eslint --init`

`yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D`

`yarn add eslint-plugin-react-hooks -D`

## Estrutura de rotas:

`yarn add react-router-dom`

## Navegação entre telas:

`yarn add history`

## Reactotron para debug:

`yarn add reactotron-react-js`

## Validação de propriedades:

`yarn add prop-types`

## Estilização com Styled Components

`yarn add styled-components`

## Utilizando Root Import:
**Importar arquivos atrávez do diretório raiz _'src'_:**

_EXEMPLO: import Exemplo from '~/page/exemplo';_

`yarn add customize-cra react-app-rewired`

Cria o arquivo _'config-overrides.js'_

`yarn add babel-plugin-root-import -D`

_OBS: no arquivo 'package.json' altera-se os scripts 'start', 'build' e teste para: 'react-app-rewired ...'_

Para ser entendido pelo _eslint_:

`yarn add eslint-import-resolver-babel-plugin-root-import -D`

Inserir as configurações após as _rules_ do _'.eslintrc.js'_:

```js
settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
```
Para o VsCode encontrar o arquivo:
Criar o arquivo _'jsconfig.json'_


## Trabalhar com cores:

`yarn add polished`

## Pegando as informações do input (Utilizando Unform)

`yarn add @rocketseat/unform`

## Validação de dados com Yup

`yarn add yup`

## Redux

### Configurando o store

`yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer`

## Acessando a API com o Axios:

`yarn add axios`


## Persistindo autenticação:

`yarn add redux-persist`

## Notificações:

`yarn add react-toastify`

## Ícones da aplicação:

`yarn add react-icons`

## Estilização do scroll das notificações:

`yarn add react-perfect-scrollbar`

_IMPORTA NO ESTILO GLOBAL:_

```js
import 'react-perfect-scrollbar/dist/css/styles.css';
```

## Trabalhar com datas:

`yarn add date-fns@next`

### Trabalhar com Timezone via date-fns

`yarn add date-fns-tz`

