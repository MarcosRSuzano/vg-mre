//Author: Marcos Rodrigues Suzano

// API endpoint
const url = 'https://pokeapi.co/api/v2/pokemon/';
//const url2 = 'https://pokeapi.co/api/v2/type/';

const getElement  = document.querySelector.bind(document);
const campoBusca  = getElement('.campoBusca'),
      botao       = getElement('.botao'),
      container   = getElement('.pokemon'),
      erroMessage = getElement('.error');

var nome_pokemon, // Informação digitada no campo de busca
    pokemon,      // Dados do pokemon recebidos da API
    card;         // Responsável por montar o html com os dados capturados da API 

// Realizar as requisições para a API e atribuir o retorno na variavel pokemon
async function requestPokeInfo(url, name) {
  pokemon = "";
  await fetch(url + name)
    .then(response => response.json())
    .then(data => {
        pokemon = data;      
    })
    .catch(err => console.log(err));
}

/*
// Adicionar os pokemons na lista (teste por nome)
function adicionarLista() {
 
  var table = document.getElementById("tabelaPokemons");
  var tableAdd = [];

    for(var i=1;i< table.rows.length; i++){
      tableAdd.push({
          idPokemon = table.rows[i].id.innerHTML,
          nomePokemon = table.rows[i].nome_pokemon.innerHTML

        })
    }
  }
  */


/*
// Realizar as requisições para a API e atribuir o retorno na variavel pokemon (teste por tipo)
async function requestPokeInfoPorTipo(url2, type) {
  pokemon.type = "";
  await fetch(url2 + type)
    .then(response => response.json())
    .then(data => {
      type = data;      
    })
    .catch(err => console.log(err));
}
*/

// Montar o HTML com os dados retornados da API - Lista usando table - teste
function createCardList() {
  if (pokemon == "")
  {
    card = `<div><h3> Pokemon nao encontrado </h3></div>`;
  }else{
  card = `
  <table>
    <tr>
      <td>
        <div class="pokemon-picture">
          <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
        </div>
        <div class="pokemon-info">
            <h1 class="name">${pokemon.name}</h1>
            <h3 class="topico">Número:</h3>
            <h3 class="descricao">${pokemon.id}</h3>
            <h3 class="topico">Tipo:</h3>
            <h3 class="descricao">${pokemon.types.map(item => item.type.name).toString()}</h3>
            <h3 class="topico">Peso:</h3>
            <h3 class="descricao"> ${pokemon.weight}kg </h3>
            <h3 class="topico">Altura:</h3>
            <h3 class="descricao">${pokemon.height}m</h3>
            <h3 class="topico">Habilidades:</h3>
            <h3 class="descricao">${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3> 
        </div>
      </td>
    </tr>

      <td>
        <div class="pokemon-picture">
          <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
        </div>
        <div class="pokemon-info">
            <h1 class="name">${pokemon.name}</h1>
            <h3 class="topico">Número:</h3>
            <h3 class="descricao">${pokemon.id}</h3>
            <h3 class="topico">Tipo:</h3>
            <h3 class="descricao">${pokemon.types.map(item => item.type.name).toString()}</h3>
            <h3 class="topico">Peso:</h3>
            <h3 class="descricao"> ${pokemon.weight}kg </h3>
            <h3 class="topico">Altura:</h3>
            <h3 class="descricao">${pokemon.height}m</h3>
            <h3 class="topico">Habilidades:</h3>
            <h3 class="descricao">${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3> 
        </div>
      </td>

  </table>`;
  }
    return card;
}


// Montar o HTML com os dados retornados da API - Lista usando table - teste
function createCardList1() {
  if (pokemon == "")
  {
    card = `<div><h3> Pokemon nao encontrado </h3></div>`;
  }else{
  card = `
  <table id="tabelaPokemons">
  <tr>
    <th> nomePokemon </th>
    <th> idPokemon </th>
  </tr>
  <tr>
    <td>
      <h1 class="name">${pokemon.name}</h1>
      <h3 class="topico">Número:</h3>
      <h3 class="descricao">${pokemon.id}</h3>
      <h3 class="topico">Tipo:</h3>
      <h3 class="descricao">${pokemon.types.map(item => item.type.name).toString()}</h3>
      <h3 class="topico">Peso:</h3>
      <h3 class="descricao"> ${pokemon.weight}kg </h3>
      <h3 class="topico">Altura:</h3>
      <h3 class="descricao">${pokemon.height}m</h3>
      <h3 class="topico">Habilidades:</h3>
      <h3 class="descricao">${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3> 
      
    </td>
  </tr>
  </table>`;
  }
    return card;
}


// Montar o HTML com os dados retornados da API - Pokemon único sem lista usando table
function createCard() {
  if (pokemon == "")
  {
    card = `<div><h3> Pokemon nao encontrado </h3></div>`;
  }else{
  card = `
  <table>
    <tr>
      <td>
        <div class="pokemon-picture">
          <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
        </div>
        <div class="pokemon-info">
            <h1 class="name">${pokemon.name}</h1>
            <h3 class="topico">Número:</h3>
            <h3 class="descricao">${pokemon.id}</h3>
            <h3 class="topico">Tipo:</h3>
            <h3 class="descricao">${pokemon.types.map(item => item.type.name).toString()}</h3>
            <h3 class="topico">Peso:</h3>
            <h3 class="descricao"> ${pokemon.weight}kg </h3>
            <h3 class="topico">Altura:</h3>
            <h3 class="descricao">${pokemon.height}m</h3>
            <h3 class="topico">Habilidades:</h3>
            <h3 class="descricao">${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3> 
        </div>
      </td>
    </tr>
  </table>`;
  }
    return card;
}


// Atribuindo o valor digitado no campo para a variável nome_pokemon e trazendo os dados correspondentes
botao.addEventListener('click', event => {
  event.preventDefault();
  nome_pokemon = campoBusca.value.toLowerCase();
  campoBusca.value = '';
  startApp(nome_pokemon);
});

// Inicialização do APP
async function startApp(nome_pokemon) {
  await requestPokeInfo(url, nome_pokemon);
    if(pokemon.detail) {
      erroMessage.style.display = 'block';
      container.style.display = 'none';
    }else{
      erroMessage.style.display = 'none';
      container.style.display = 'flex';
	  container.innerHTML = createCard();
      //container.innerHTML = createCardList();
      //container.innerHTML = createCardList1();
    }
}