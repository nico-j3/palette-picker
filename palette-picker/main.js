import './style.css'

import initialPalettes from './palettes.json'

import { v4 as uuidv4} from 'uuid';
// data-store.js

import {initializePalettesIfEmpty, getAllPalettes, addAllPalettes, deletePalettes} from './local-storage.js'


//helper function
const handleSubmit = (e) => {
  e.preventDefault();
  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const form = e.target;
  const formData = new FormData(form);
  const newPalette = Object.fromEntries(formData);

  newPalette.uuid = uuidv4();

  addAllPalettes(newPalette);

  renderPalettes();

  console.log('here is your data:', newPalette);
  // do something with formObj data...



  form.reset();
}

const renderPalettes = () => {

// const paletteSections = document.querySelector('.palette-cards');
// paletteSections.classList.add('palette-cards');

// const fullPalettes = getAllPalettes()
//   fullPalettes.forEach(section => {
//     const card = document.createElement('div');
//     card.id = 'submitted-colors'
//     const paletteSections = document.querySelector('#submitted-colors');
//     paletteSections.appendChild(card)
  
//   })


  const defaultUl = document.querySelector('.chosen-colors');
  defaultUl.innerHTML = ''
  const localStoragePalettes = getAllPalettes()
  
  localStoragePalettes.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('new-colors')
    li.innerHTML = `
    <h3 class="palette-title" > ${item.title}</h3>
      <p> ${item.firstColor}</p>
      <p> ${item.secondColor}</p>
      <p> ${item.thirdColor}</p>
    <p> ${item.temperature}</p>
    `
    defaultUl.append(li);

  });
  // console.log(localStoragePalettes);
}




//runner function
const main = () => {
  const form = document.querySelector('#new-palette-form');
  form.addEventListener('submit', handleSubmit )
  console.log(initialPalettes)
  initializePalettesIfEmpty();
  renderPalettes();

  const removal = document.querySelector('.chosen-colors');
  removal.addEventListener('click', (e) => {
    e.target.remove()
  }
  )
};

main();








