// const addArray = document.querySelector('#btn-array');
// let titleArray = '';
// const inputTitleArray = document.getElementById('input-array-title');
// const section = document.querySelector('section');

// console.log(addArray);

// console.log('valeur array', inputTitleArray);
// console.log(section);

// addArray.addEventListener('click', (e) => {
//   // console.log('Je veux un tableau');
//   e.preventDefault();
//   let div = document.createElement('div');
//   div.classList.add('array');
//   section.appendChild(div);
//   let p = document.createElement('p');
//   p.classList.add('array-title');
//   div.appendChild(p);
//   p.innerText = inputTitleArray.value;
// });

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
    <p class="array-title">${array.title}</p>
    <button>Supprimer</button>
  
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
