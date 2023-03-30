fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));




const block = document.querySelector('.block');
const buttons = document.querySelector('.buttons');
let count = 1;

buttons.addEventListener('click', (event) => {
    const button = event.target;
    if (button.classList.contains('next') && count < 200) {
        count++;
        fetchData(count);
    } else if (button.classList.contains('prev') && count > 1) {
        count--;
        fetchData(count);
    }
});

function fetchData(count) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
        <h2>${data.title}</h2>
        <span>${data.id}</span>
        <h3>${data.completed}</h3>
      `;
        });
}
