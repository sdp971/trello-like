const section = document.querySelector('section');
const form = document.querySelector('form');
const input = document.querySelector('form > input ');


const arrays = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value;
  console.log(value);
  input.value = '';
  addArray(value);
  displayArray();
});

/**Methodes */
const displayArray = () => {
  const arraysNode = arrays.map((array, index) => {
    return createArrayElement(array, index);
  });
  section.innerHTML = '';
  section.append(...arraysNode);
};


const createArrayElement = (array, index) => {
  const div = document.createElement('div');
  div.classList.add('array');
  div.innerHTML = `
    <div class='array-container'>
      <p class="array-title">${array.title}</p>
      <button>Supprimer</button>
    </div>
    <div class="card-container">
    </div>
    <form class="click-card">
      <input
        type="text"
        id="input-card-title"
        placeholder="Taper le nom de la carte"
      />
      <button type="submit" id="btn-array">Ajouter</button>
    </form>
  `;

  const cardContainer = div.querySelector('.card-container');
  array.cards.forEach((card) => {
    const cardDiv = document.createElement('div');
     cardDiv.classList.add('card');
    cardDiv.innerHTML = `
      <p class="card-title">${card.title}</p>
      <button>Supprimer</button>
    `;
    cardContainer.appendChild(cardDiv);
  });

  createCardElement(div, array);

  return div;
};

const displayCard = (div, card) => {
  const cardContainer = div.querySelector('.card-container');
  const cardDiv = document.createElement('div');
   cardDiv.classList.add('card');
  cardDiv.innerHTML = `
    <p class="card-title">${card.title}</p>
    <button>Supprimer</button>
  `;
  cardContainer.appendChild(cardDiv);
};

const createCardElement = (div, array) => {
  const formCard = div.querySelector('.click-card');
  const inputCard = div.querySelector('#input-card-title');

  formCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputCardValue = inputCard.value;
    console.log(inputCardValue);
    console.log('tableau', array);
    inputCard.value = '';
    const lastCard= addCard(inputCardValue, array);
    displayCard(div, lastCard);
  });

  return div;
};

const addArray = (text) => {
  arrays.push({
    title: text,
    cards: [], 
  });
  console.log(arrays);
};

const addCard = (text, array) => {
  const newCard = { title: text };
  array.cards.push(newCard);
  return newCard;
};



displayArray();
