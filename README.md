# DAY 2 BLOCK 16 - React com Redux - parte 1

> A pasta `src` contém todas as versões finais dos arquivos do projeto que foram alterados.

## Passos Pré Aula ao vivo

### 1. Criação de uma aplicação **React**

Execute o comando abaixo para criar a aplicação **React** com o nome `reactredux`.

```
npx create-react-app reactredux
```

Entre na pasta `cd reactredux` e inicie a aplicação com `npm start`.

### 2. Limpeza da aplicação

Faça uma limpeza na aplicação antes de iniciar o desenvolvimento.

Remova os seguintes arquivos:
- `src/App.css`
- `src/App.test.js`
- `src/index.css`
- `src/logo.svg`
- `src/serviceWorker.js`

Dentro do arquivo `src/index.js` remova as importações dos arquivos excluídos e os comentários:

`src/index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Dentro do arquivo `src/App.js` remova as importações dos arquivos excluídos e o código da estrutura do componente:

`src/App.js`
```javascript
import React from 'react';

function App() {
  return (
    <div className="App">
    </div>
  );
};

export default App;
```

---

### Apresentação da dinâmica do dia.

**OE** Vocês não precisam replicar o que vou fazer durante a aula.
Concentrem os esforços mentais para prestar atenção e vão enviando sua dúvidas no _Bate Papo do Zoom_.
A monitoria estará, também, 100% online após a aula para ajudar.

**OE** Esta aula servirá para mostrar na prática como utilizar **Redux** com **React**.
Criaremos uma aplicação **React** e, na medida em que desenvolvermos, vamos adicionar e configurar o **Redux**.

---

## Aula ao vivo

### 3. Apresentação do projeto a ser desenvolvido

**OE** Apresente [este wireframe](project_wireframe.png) contendo o protótipo da tela que será desenvolvida.

Iremos desenvolver uma aplicação que contém um _player_ de vídeo e uma listagem de filmes divididos por categoria ao lado desse _player_.

Não vamos focar em **CSS** nesse projeto. Ao final, portanto


### 4. Componente Sidebar

O componente `Sidebar` representará a barra lateral com as categorias e filmes.
O componente ficará no arquivo `src/components/Sidebar.js`.

`src/components/Sidebar.js`
```javascript
import React from 'react'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [
        {
          id: 1,
          name: "Drama",
          movies: [
            { id: 1, title: "The boy in the striped pajamas", released: 2008 },
            { id: 2, title: "The pursuit of hapiness", released: 2006 },
            { id: 3, title: "Fences", released: 2016 }
          ]
        },
        {
          id: 2,
          name: "Action",
          movies: [
            { id: 4, title: "Shooter", released: 2007 }
          ]
        },
        {
          id: 3,
          name: "Romantic",
          movies: [
            { id: 5, title: "Me before you", released: 2016 },
            { id: 6, title: "The lake house", released: 2006 }
          ]
        }
      ]
    }
  }

  render() {
    const { categories } = this.state

    return (
      <aside>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>{movie.title} was released in {movie.released}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
}

export default Sidebar
```

Temos aqui, portanto, um componente de classe que possui uma array de objetos chamada `categories`, contendo todos esses filmes, como estado do componente. Alguma dúvida?

**OE** Pause para saber se alguém ainda não está familiarizado com a construção de um componente de classe.

Agora vamos importar o componente `Sidebar` no arquivo `src/App.js` e utilizá-lo.

`src/App.js`
```javascript
// import React from 'react';

import Sidebar from './components/Sidebar'

// function App() {
//   return (
//     <div className="App">
      <Sidebar />
//     </div>
//   );
// }

// export default App;
```

**OE** Mostre a aplicação funcionando no _browser_.

### 5. Componente Player

O componente `Player` representará o _player_ de vídeo que passará o filme selecionado.
O componente ficará no arquivo `src/components/Player.js`. Posteriormente esse componente se utilizará do estado gerado via `Redux`.

**OE** Não vamos implementar a funcionalidade completa desse componente por hora.

`src/components/Player.js`
```javascript
import React from 'react'

class Player extends React.Component {
  render() {
    return (
      <div>
        <h1>Categoria 1</h1>
        <h2>Filme 1</h2>
      </div>
    )
  }
}

export default Player
```

Agora vamos importar o componente `Player` no arquivo `src/App.js` e utilizá-lo

`src/App.js`
```javascript
// import React from 'react';

// import Sidebar from './components/Sidebar';
import Player from './components/Player';

// function App() {
//   return (
//     <div className="App">

      <Player />
//       <Sidebar />
//     </div>
//   );
// }

// export default App;
```

**OE** Mostre a aplicação funcionando no _browser_, pause para perguntas no _sli.do_

### 6. Compartilhando informações entre `Sidebar` e `Player`

Imagine que temos de compartilhar os dados entre `Sidebar`e `Player`. A forma que vocês já fizeram anteriormente é a de colocar as informações no componente `App`, pois ele é o componente pai dos componentes `Sidebar` e `Player` e pode, portanto, passar parte do seu estado para ambos através de _props_ e ter seu estado atualizado por ambos através de _callbacks_.

Para isso, alteraremos o componente `App.js` para ser uma classe:
```javascript
// ...
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // return (
    //   <div>
    //     <Player />
    //     <Sidebar />
    //   </div>
    // )
  }
}
// ...
```

Vamos remover todo o conteúdo de `this.state` do componente `Sidebar` e colocá-lo em `src/data.js`:

`src/components/Sidebar.js`
```javascript
class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {...}
  }
  // ...
}
```

`src/data.js`
```javascript
const categories = [
  {
    id: 1,
    name: "Drama",
    movies: [
      { id: 1, title: "The boy in the striped pajamas", released: 2008 },
      { id: 2, title: "The pursuit of hapiness", released: 2006 },
      { id: 3, title: "Fences", released: 2016 }
    ]
  },
  {
    id: 2,
    name: "Action",
    movies: [
      { id: 4, title: "Shooter", released: 2007 }
    ]
  },
  {
    id: 3,
    name: "Romantic",
    movies: [
      { id: 5, title: "Me before you", released: 2016 },
      { id: 6, title: "The lake house", released: 2006 }
    ]
  }
]

export default categories
```

Agora vamos importar os dados em `App.js`:

`src/App.js`
```javascript
// import React from 'react';

// import Sidebar from './components/Sidebar'
// import Player from './components/Player';

import categories from './data';

class App extends React.Component {
//   constructor(props) {
//     super(props)

    this.state = {
      categories: [...categories]
    }
  }
// ...
}
```

Agora podemos passar a lista para o componente `Sidebar` via _props_:

`src/App.js`
```javascript
class App extends React.Component {
  // ...
  render() {
    return (
      // <div>
      //   <Player />
        <Sidebar categories={this.state.categories} />
      // </div>
    )
  }
// }
```

`src/components/Sidebar.js`
```javascript
class Sidebar extends React.Component {
  // ...
  render() {
    const { categories } = this.props
    // return...
  }
// }
```

**OE** Mostre que as alterações feitas não modificaram o funcionamento da aplicação. Tire dúvidas no _sli.do_

Como o componente `Sidebar` não possui um estado próprio, mas somente utilizará o estado global e as informações do nosso arquivo `data.js`, podemos transformar esse componente em _functional component_ da seguinte forma:

`src/components/Sidebar.js`
```javascript
// import React from 'react'

const Sidebar = ({ categories }) => (
  <aside>
    {
      categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {
              category.movies.map(movie => (
                <li key={movie.id}>{movie.title} was released in {movie.released}</li>
              ))
            }
          </ul>
        </div>
      ))
    }
  </aside>
)

// export default Sidebar

```

**OE** Tire dúvidas no _sli.do_

### 7. Adicionando Redux

Até o momento temos todo o estado da aplicação em `App.js`, mas poderíamos ter um estado específico para `Sidebar` e `Player` além desse estado geral da aplicação. Isto por si só não é um problema mas, na medida que a aplicação cresce, fica difícil sabermos onde está o estado de determinada funcionalidade e quais componentes alteram esse valor (e como alterar? diretamente? _callback_? _props_?).

**Redux** vem para nos ajudar nisso. Ele cria uma forma central de guardarmos a parte do estado da nossa aplicação que é usada por vários componentes.

Um ponto de atenção que eu queria deixar bem claro é que o Redux é uma solução para gerenciamento de estado GLOBAL. Ou seja, caso você tenha um estado que você queira compartilhar entre mais de um componente, é interessante usar o `Redux`.

Porém, contudo, todavia, isso não elimina, de forma alguma, a possibilidade de criação de componentes que contenham seu próprio estado, para uso somente naquele componente.

Sendo assim, com o Redux, nossos componentes podem ser criados sem estado algum (_functional components_), com uso do estado local e/ou com uso do estado global da aplicação.

Primeiramente vamos instalar as dependências relacionadas ao **Redux**

```
npm install --save redux react-redux
```

- `redux` é a biblioteca que possui a implementação do **Redux**
- `react-redux` é a biblioteca que faz a integração do **React** com o **Redux**

### 8. Criando o Store

`Store` é onde o **Redux** armazena o estado global da aplicação.

Vamos configurar o `Store` no arquivo `src/store/index.js`:

`src/store/index.js`
```javascript
import { createStore } from 'redux'

const store = createStore()

export default store
```

A função `createStore()` precisa de um parâmetro obrigatório que será uma função que retorna o estado inicial da aplicação. Como não foi passado nenhum parâmetro, nossa aplicação não funcionará num primeiro momento.

Vamos importar o `Provider` do `react-redux` e o `src/store/index.js` que configuramos.

`src/App.js`
```javascript
// import React from 'react';
import { Provider } from 'react-redux'

// import Sidebar from './components/Sidebar'
// import Player from './components/Player';
import store from './store';
```

Com as importações feitas, podemos configurar nossa aplicação para utilizar o Redux. Imaginem como se, daqui em diante, a `store` vem com um state que fuciona para toda a nossa aplicação, de forma que qualquer componente tem fácil acesso às suas propriedades.

Perceba que não vamos passar a lista de categorias e filmes via _props_, vamos obter essas informações através do **Redux**.

Com isso, colocamos na prática um dos conceitos principais do `Redux`: O estado global da sua aplicação é armazenado numa árvore de objetos dentro de uma única `store`.

`src/App.js`
```javascript
  // render() {
  //   return (
  //     <div>
        <Provider store={store}>
          <Player />
          <Sidebar />
        </Provider>
  //     </div>
  //   )
  // }
```

**OE** abra espaço para perguntas. informe que eles não precisam se preocupar com o Provider, mas que isso é a forma que o redux se utilizou para passar a informação para todos os componentes de forma mais simples. Não adentre no debate sobre `contextAPI` caso alguém o proponha.

Vamos então iniciar com a criação das nossas `Actions`, em seguida, os nossos `Reducers` e, ao final, conectá-la no nosso componente `Sidebar.js`.

### 10. Criando uma Action

Agora vamos criar uma forma de clicar em algum filme e atualizar o estado no **Redux**. Conseguimos fazer isso através de **Actions** - a `action` é uma função que pode ser acionada por meio da interação do usuário através de um clique, uma digitação, etc.

O retorno de uma **Action** possui um formato padrão: É um objeto que deve, obrigatoriamente, possuir uma chave de `type` que contém um identificador daquela ação. É adequado criar uma pasta específica para todas as suas `actions`.

Crie o arquivo movieAction.js em `src/actions`

`src/actions/movieAction.js`
```javascript

export function selectMovie(category, movie) {
  return {
    type: 'SELECT_MOVIE',
    category,
    movie
  }
};
```
**OE** abra espaço para peguntas. Esclareça porque utilizou somente category como retorno da função, ao invés de `category: category`.

Então foi criada a ação que receberá dois parâmetros (`category` e `movie`), mas o que será feito com essa informação? É aí que entram os `reducers`, que vão processar esses dados ouvindo o tipo de ação executada.

### 11. Criando um Reducer

A função `reducer` serve também para manipular o nosso estado global. Imaginem como um `event listener` do JavaScript vanilla. Ela ouvirá o tipo de ação disparada e, com isso, alterará o estado nos termos que forem estabelecidos como retorno da função.
Por padrão, o `Reducer` recebe dois parâmetros:
- `state`: é o estado anterior ou o estado inicial da aplicação;
- `action`: a ação realizada (o clique, a digitação, a seleção de uma opção, etc.)

Uma boa prática é definir o estado inicial fora do reducer para ficar mais legível:

`src/reducers/movieReducer.js`
```javascript
import categories from '../data';
const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: [...categories]
};

function movieReducer(state = INITIAL_STATE, action) {
  return state
};

export default movieReducer;

```

Vamos atualizar o estado com a informação do filme clicado.
Uma forma de fazer isso é verificar o tipo da _action_ e executar o que é necessário. Como só temos uma ação, podemos utilizar nosso bom e velho `if`. Em casos em que há mais de uma ação, o `switch/case` é recomendável.

**importante: o reducer identifica a ação por meio de seu tipo. Lembra que falamos que a `action`, obrigatoriamente, precisa ter um `type`? É exatamente para isso: para que o reducer identifique a ação e proceda à alteração do estado.

Como a action retorna um objeto, devemos tratá-la no reducer como se trataria acessando os valores de um objeto. Nosso reducer ficaria mais ou menos assim:

`src/reducers/movieReducer.js`
```javascript
function movieReducer(state = INITIAL_STATE, action) {
  if (action.type === "SELECT_MOVIE") {
    return {
      ...state,
      selectedCategory: action.category,
      selectedMovie: action.movie
    }
  }
  return state
};

export default movieReducer;

```

Fizemos um `spread` para, em resumo, fazer uma cópia de nosso estado anterior e somente alterar aquilo que apontamos em nosso reducer. Caso esse `spread` não fosse executado, todo o `ÌNITIAL_STATE` acima seria trocado pelas novas informações trazidas pelo `movieReducer`
**OE** abra espaço para perguntas. Divida a tela ao meio e mostre a action e o reducer lado a lado, mostrando à turma de onde veio e pra onde vai cada pedaço da informação.

Como nossa aplicação pode ter vários `reducers`, precisamos combiná-los para que nossa aplicação possa usufruir de todos eles. Por isso, vamos criar um arquivo `index.js` na pasta `reducers` que combinará todos os reducers por meio da função autoexplicativa `combineReducers`:

`src/reducers/index.js`
```javascript
import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

export default combineReducers({
  movieReducer
});
```

Lembrem-se que, cada vez que criamos um novo reducer, devemos importá-lo para  este arquivo e incluir na função combineReducers, para que nossa aplicação possa utilizá-los.

Com nossos reducers devidamente combinados, resta informar ao nosso `store` que estamos nos utilizando deles. Por prática, chamaremos esse reducer de `RootReducer` e incluiremos ele como parâmetro da função `createStore` em `src/store/index.js`:

`src/store/index.js`
```javascript
// import { createStore } from 'redux'

import rootReducer from '../reducers'

const store = createStore(rootReducer)

// export default store
```

**OE** abra espaço para dúvidas no _sli.do_.

### 12. Conectando tudo ao componente.

Criamos o `store`, que armazenará o estado global da aplicação e criamos a action que entregará uma informação para nosso `reducer`. Nada disso faz sentido, no entanto, se não conectarmos tudo isso ao componente, a fim de que ele se utilize dos recursos criados.

Então, peço que prestem bastante atenção a esta parte da aula, pois aqui é o momento onde tudo será devidamente interligado.

Para podermos utilizar do estado da aplicação e as `actions` que criamos, precisamos mapear o estado e mapear as ações despachadas, utilizando-as no nosso componente como propriedade - e tudo isso será interligado pela função `connect` a seguir:

Vamos utilizar o `connect` do `react-redux` para conectar o componente `Sidebar` ao `Store`.
O `connect` serve para compartilhar o estado do **Redux** com componentes.

`src/components/Sidebar.js`
```javascript
// import React from 'react'
import { connect } from 'react-redux'
// ...
export default connect()(Sidebar)
```

O `connect` recebe uma função como primeiro parâmetro. Esta define quais propriedades do estado do **Redux** serão acessadas. Podemos extrair esse código para função que geralmente leva o nome de `mapStateToProps`. Vamos então criá-la:

`src/components/Sidebar.js`
```javascript
const mapStateToProps = (state) => ({
  categories: state.movieReducer.categories,
});

export default connect(mapStateToProps)(Sidebar)
```

A função `mapStateToProps` é utilizada para selecionar qual parte da nossa `store` queremos utilizar no nosso componente. Ela recebe a store inteira e deve retornar um objeto, que serão os valores que queremos utilizar ali. No nosso caso, passamos todo o `state` global como parâmetro e recebemos, como retorno, uma propriedade `categories` cujo valor será o que está dentro do nosso `movieReducer.categories`. Essa função SEMPRE SERÁ CHAMADA toda vez que o state definido no retorno mudar

**OE** pause para perguntas. Abra o movieReducer lado a lado com a função, para mostrar de onde veio esse `state.movieReducer.categories`.

Percebam: foi criada uma função que recebe o estado global (aquele criado pelo nosso `reducer`) como parâmetro e, em seguida, retornou uma propriedade baseada no estado. Deixarei isso de forma mais ilustrativa pra vocês (lembrando que estou fazendo isso somente para efeito de visualização do fluxo da informação, uma boa prática é manter o nome da `prop` tão esclarecedor quanto o nome de uma variável qualquer):

`src/components/Sidebar.js`
```javascript
const mapStateToProps = state => ({
  propThatCameFromReducer: state.movieReducer.categories,
})

export default connect(mapStateToProps)(Sidebar)
```
Isso quer dizer que, a partir de agora, podemos acessar a propriedade `propThatCameFromReducer` dentro do componente `Sidebar` através de `this.props.propThatCameFromReducer`, e ela terá o valor de `state.movieReducer.categories`, que foi definido em nosso `reducer`. Observem:

`src/components/Sidebar.js`
```javascript
const Sidebar = ({ propThatCameFromReducer }) => (
  // <aside>
  //   {
      propThatCameFromReducer.map(category => (
```

**OE** Depois de mostrar para estudantes que `Sidebar` está recebendo `propThatCameFromReducer` como `props`, renomeie a propriedade do objeto sendo retornado pelo `mapStateToProps` de volta para `categories`, e faça o mesmo para a `prop` que o componente `Sidebar` recebe.

`src/components/Sidebar.js`
```javascript
const Sidebar = ({ categories, selectMovie }) => (
  // <aside>
  //   {
      categories.map(category => (
```

Ok, mapeamos o estado da aplicação, mas vocês concordam que nossa `Action`, em nenhum momento, foi importada ou sequer mencionada aqui em nosso componente? Sendo assim, como poderemos fazer para que nossa action `selectMovie` possa ser utilizada aqui? É aqui que entra a segunda função que vem como parâmetro de `connect` - a `mapDispatchToProps`, que, recebendo como parâmetro o método `dispatch`, próprio do `redux`, mapeia as _actions_ para as propriedades do componente.

**É aqui que a ação realizada (o clique, a digitação, a seleção de uma opção, etc.) deverá ser ligada ao componente.**

Sendo assim, vamos chamar nossa ação aqui, vou criar o botão que se utilizará da ação mapeada, construindo uma função de forma muito parecida com a `mapStateToProps`:

`src/components/Sidebar.js`
```javascript
import * as MovieActions from '../actions/movieAction';
...
const Sidebar = ({ categories, selectMovie }) => (
<li>
...
<button type="button" onClick={() => selectMovie(category, movie)}>
  Select
</button>
</li>
...
const mapDispatchToProps = dispatch => ({
  selectMovie: (category, movie) => dispatch(MovieActions.selectMovie(category, movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
```

**OE** esclareça que esse botão não fará nada porque, apesar dele estar mudando o estado, não renderizamos novas informações na tela. Isso será feito no componente `Player`.

**OE** Abra espaço para perguntas. Esclareça que a função connect recebe `mapStateToProps` e `mapDispatchToProps` como os dois primeiros parâmetros. Caso queria passar somente `mapStateToProps`, você pode simplesmente chamar `connect(mapStateToProps)`. Caso queira passar somente `mapDispatchToProps`, você teria que chamar `connect(null, mapDispatchToProps)`.

**OE** Mostre que a página continua funcionando. Acrescente um debugger ao código e mostre que o estado armazendo no redux agora está disponível em `this.props.categories`.


### 13. Mostrando o filme selecionado

Pra que nosso player também usufrua do estado global da aplicação, basta que eu também o conecte por meio da função `mapStateToProps`.

Em resumo: quando se está com uma aplicação React que utiliza Redux para gerenciamento do estado global, nossos componentes irão acessar esse estado para leitura como uma `prop` a ser passada por meio de `mapStateToProps`.

Ou seja, o que começou assim será alterado, recebendo o estado como parâmetro.

`src/components/Player.js`
```javascript
const Player = () => (
  <div>
    <h1>Categoria 1</h1>
    <h2>Filme 1</h2>
  </div>
)
```

Conecte o componente `Player` ao **Redux** e mapeie os dados a serem acessados.
```javascript
// import React from 'react';
import { connect } from 'react-redux';

// ...

const mapStateToProps = state => ({
  categories: state.movieReducer.selectedCategory,
  movie: state.movieReducer.selectedMovie,
})

export default connect(mapStateToProps, null)(Player);
```

**OE** E por fim, exiba os dados:

`src/components/Player.js`
```javascript
const Player = ({ category, movie }) => (
  <div>
    <h1>Categoria: {category.name}</h1>
    <h2>Filme: {movie.title}</h2>
  </div>
)
```
**OE** Mostre a aplicação funcionando e abra o _sli.do_ para dúvidas finais.

Hoje aprendemos sobre todos os conceitos principais que envolvem **React** e **Redux** e configuramos tudo isso na prática.
