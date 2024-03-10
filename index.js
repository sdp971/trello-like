const section = document.querySelector('section');
const form = document.querySelector('form');
const input = document.querySelector('form > input ');


const arrays = [
  {
    title: 'Maison',
  },
  {
    title: 'Travail',
  },
];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value;
  console.log(value);
  input.value = "";
  addArray(value);
  displayArray();
 

});

const displayArray = () => {
  const arraysNode = arrays.map((array,index) => {
    return createArrayElement(array, index);
  })
  section.innerHTML = "";
  section.append(...arraysNode)
}

const createArrayElement = (array,index) => {
  const div = document.createElement('div');
   div.classList.add('array');
  div.innerHTML = `
  <div class='array-title-container'>
    <p class="array-title">${array.title}</p>
    <button>Supprimer</button>
    </div>
  
  `;
  return div;
}

const addArray = (text) => {
  arrays.push({
    title : text,
  })
  console.log(arrays)
}

displayArray();
