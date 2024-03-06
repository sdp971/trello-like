const addArray = document.querySelector('#btn-array');
const titleArray = document.querySelector('.array-title');
const inputTitleArray = document.querySelector('input[type="text"]');
const section = document.querySelector('section');

console.log(addArray);
console.log(titleArray);
console.log(inputTitleArray);
console.log(section);

addArray.addEventListener('click', () => {
  // console.log('Je veux un tableau');
  let div = document.createElement('div');
  div.classList.add('array');
  let arrayAdded = section.appendChild(div);
  let p = document.createElement('p');
  p.classList.add('array-title');
  arrayAdded.appendChild(p);
});

inputTitleArray.addEventListener('input', (e) => {
  console.log(e.target.value);
});
