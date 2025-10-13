import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.querySelector('#date');

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
});
