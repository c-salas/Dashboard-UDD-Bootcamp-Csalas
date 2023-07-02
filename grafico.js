import { createGrafico } from './createGrafico.js'

const button = document.getElementById('button');
const inputText = document.getElementById('inputText');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const url = 'https://mindicador.cl/api/';
  let informacionFinanciera = [];

  const getData = async () => {

    const value = inputText.value;
  
    const response = await fetch(url + value);
    const data = await response.json();

    informacionFinanciera = data.serie;
  };

  getData().then(() => {
    createGrafico(informacionFinanciera);
  });

});