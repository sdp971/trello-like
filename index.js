const addArray = document.querySelector('#btn-array');
let titleArray = '';
const inputTitleArray = document.getElementById('input-array-title');
const section = document.querySelector('section');

console.log(addArray);

console.log('valeur array', inputTitleArray);
console.log(section);

addArray.addEventListener('click', (e) => {
  // console.log('Je veux un tableau');
  e.preventDefault();
  let div = document.createElement('div');
  div.classList.add('array');
  section.appendChild(div);
  let p = document.createElement('p');
  p.classList.add('array-title');
  div.appendChild(p);
  p.innerText = inputTitleArray.value;
});


